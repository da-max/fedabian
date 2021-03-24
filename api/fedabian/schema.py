from flask_jwt_extended import create_access_token
from graphene import ObjectType, Mutation, String, Field
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType

from fedabian.models import User as UserModel


class User(MongoengineObjectType):
    class Meta:
        description = 'User'
        model = UserModel
        interfaces = (Node, )


class Login(Mutation):
    class Arguments:
        username = String()
        password = String()

    token = String()
    user = Field(lambda: User)

    @classmethod
    def mutate(cls, info, *args, **kwargs):
        try:
            user = UserModel.objects(username=kwargs['username']).first()
            assert user != None
        except AssertionError:
            return Exception('wrong username')

        if UserModel.verify_hash(kwargs['password'], user.password):
            return Login(token=create_access_token(kwargs['username']), user=user)
        else:
            raise Exception('wrong password')


class Query(ObjectType):
    users = MongoengineConnectionField(User)


class Mutations(ObjectType):
    login = Login.Field()
