"""
Types, queries and mutation for the core app.
"""
from flask_jwt_extended import create_access_token, jwt_required
from graphene import ObjectType, Mutation, String, Field
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType

from fedabian.models import User as UserModel, Project as ProjectModel


# Types
# ======


class User(MongoengineObjectType):
    """
    Class to define the GrapQL type User.
    """

    class Meta:
        """
        Meta class of the User.
        """
        description = 'User'
        model = UserModel
        interfaces = (Node,)


class Project(MongoengineObjectType):
    """
    Class to define the GraphQL type Project.
    """

    class Meta:
        """
        Meta class of the Project.
        """
        description = 'Project'
        model = ProjectModel
        interfaces = (Node,)
        fields = '__all__'


# Query
# =====


class Query(ObjectType):
    """
    Query for the core app.
    """
    users = MongoengineConnectionField(User)
    projects = MongoengineConnectionField(Project)


# Mutations
# =========

class CreateProject(Mutation):
    """
    Class for define the CreateProject mutation.

    """

    class Arguments:
        title = String()
        description = String(required=False)
        repo = String(required=False)
        demo = String(required=False)

    project = Field(lambda: Project)

    @classmethod
    @jwt_required
    def mutate(cls, info: dict, *args, title: str = None, description, repo=None, demo=None):
        try:
            if title is None:
                raise Exception('The title of the project is not define.')

            print(title)

            project = ProjectModel(title=title, description=description, repo=repo, demo=demo).save()
            return CreateProject(project=project)
        except Exception as e:
            return Exception(f'The project can not be saved, please, check if you have complet all fields : {e}')


class Login(Mutation):
    """
    Class to define the login mutation.

    :param token: token generate for the user.
    :type token: str
    :param user: Informations about the user.
    :type user: User
    """

    class Arguments:
        """
        Arguments to send in the mutation.

        :param username: username of the user.
        :type username: str
        :param password: password of the user.
        :type password: str
        """
        username = String()
        password = String()

    token = String()
    user = Field(lambda: User)

    @classmethod
    def mutate(cls, info, *args, **kwargs):
        """
        Class call when the login mutation is executing.
        :param info: information about the request
        :type info: dict
        :param args: params pass to the mutation
        :type args: list, optional
        :param kwargs: data pass to the mutation
        :type kwargs: dict
        :raises: Exception: wrong username, wrong password
        :return: Informations and token about the user,
        if he has send the good password,username,
        else raise and exception
        :rtype: Login
        """
        try:
            user = UserModel.objects(username=kwargs['username']).first()
            assert user != None
        except AssertionError:
            return Exception('wrong username')

        if UserModel.verify_hash(kwargs['password'], user.password):
            return Login(token=create_access_token(kwargs['username']), user=user)
        else:
            raise Exception('wrong password')


class Mutations(ObjectType):
    """
    Mutations for the core app.
    """
    login = Login.Field()
    create_project = CreateProject.Field()
