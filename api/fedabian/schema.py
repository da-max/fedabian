"""
Types, queries and mutations for the core app.
"""
import os
from flask_jwt_extended import create_access_token, jwt_required
from graphene import ObjectType, Mutation, String, Field, Boolean, ID, InputObjectType
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from graphene_file_upload.scalars import Upload
from werkzeug.utils import secure_filename

from fedabian.models import User as UserModel, Project as ProjectModel
from utils.mail import EmailThread


# Types
# ======


class User(MongoengineObjectType):
    """
    Class to define the GraphQL type User.
    """

    class Meta:
        """
        Meta class of the User.
        """
        description = 'User'
        model = UserModel
        interfaces = (Node,)
        exclude_fields = ('password',)
        filter_fields = {
            'username': ['exact'],
            'email': ['exact'],
            'id': ['exact']
        }


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
        filter_fields = {
            'id': ['exact']
        }


# Query
# =====


class Query(ObjectType):
    """
    Query for the core app.
    """
    all_users = MongoengineConnectionField(User)
    all_projects = MongoengineConnectionField(Project)
    project = Field(Project, id=ID(required=True))

    @jwt_required
    def resolve_all_users(self, info, *args, **kwargs) -> [UserModel]:
        users = UserModel.objects
        return users

    @jwt_required
    def resolve_project(self, info, id: str) -> UserModel:
        user = ProjectModel.objects(id=id).first()
        return user


# Mutations
# =========

class ProjectInput(InputObjectType):
    title = String(required=True)
    description = String(required=False)
    repo = String(required=False)
    demo = String(required=False)
    image = Upload(required=False)


class CreateProject(Mutation):
    """
    Class for define the CreateProject mutations.

    """

    class Arguments:
        project = ProjectInput(required=True)

    project = Field(lambda: Project)

    @jwt_required
    def mutate(root, info: dict, project: ProjectInput):
        try:
            if project.title is None:
                raise Exception('The title of the project is not define.')

            p = ProjectModel(title=project.title, description=project.description, repo=project.repo, demo=project.demo,
                             image=project.image).save()
            return CreateProject(project=p)
        except Exception as e:
            return Exception(f'The project can not be saved, please, check if you have complet all fields : {e}')


class UpdateProject(Mutation):
    """
    Class for define the UpdateProject mutation.
    """

    class Arguments:
        project = ProjectInput(required=True)
        id = ID(required=True)

    project = Field(lambda: Project)

    @staticmethod
    def mutate(root, info: list, id: str, project: ProjectInput):
        from run import app
        try:
            assert project.title is not None
            p = ProjectModel.objects.get(id=Node.from_global_id(id)[1])
            p.update(title=project.title,
                           description=project.description,
                           demo=project.demo,
                           repo=project.repo)
            if project.image['data']:
                f = project.image['data']
                file_path: str = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(f.filename))

                f.save(file_path)
                p.image = file_path
                p.save()

            return CreateProject(project=p)
        except Exception as e:
            return Exception(f'The project can not be updated, please check if all fields are valid : {e}')


class SendContactMail(Mutation):
    """
    Class for send mail with a mutations.

    :param name: name of the person sending the message
    :type name: str
    :param email: mail of the person sending the message
    :type email: str
    :param content: content of the message
    :type content: str
    """

    class Arguments:
        name = String()
        email = String()
        content = String()

    ok = Boolean()

    @staticmethod
    def mutate(root, info: dict, *args: list, **kwargs: dict):
        """
        Call when the mutations was send.
        """
        ok = True
        try:
            content: str = f"Nom : {kwargs['name']}\n Email : {kwargs['email']}\n Content : {kwargs['content']}"
            EmailThread("[Fedabian] Prise de contact", content).start()
        except Exception as e:
            ok = False
            return Exception(e)

        return SendContactMail(ok)


class Login(Mutation):
    """
    Class to define the login mutations.

    :param token: token generate for the user.
    :type token: str
    :param user: Informations about the user.
    :type user: User
    """

    class Arguments:
        """
        Arguments to send in the mutations.

        :param username: username of the user.
        :type username: str
        :param password: password of the user.
        :type password: str
        """
        username = String()
        password = String()

    token = String()
    user = Field(lambda: User)

    @staticmethod
    def mutate(root, info: dict, *args: list, **kwargs: dict):
        """
        Class call when the login mutations is executing.
        :param info: information about the request
        :type info: dict
        :param args: params pass to the mutations
        :type args: list, optional
        :param kwargs: data pass to the mutations
        :type kwargs: dict
        :raises: Exception: wrong username, wrong password
        :return: Informations and token about the user,
        if he has send the good password,username,
        else raise and exception
        :rtype: Login
        """
        try:
            user = UserModel.objects(username=kwargs['username']).first()
            assert user is not None
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
    update_project = UpdateProject.Field()
    send_contact_mail = SendContactMail.Field()
