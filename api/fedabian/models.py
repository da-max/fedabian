from passlib.hash import pbkdf2_sha256
from mongoengine import Document
from mongoengine.fields import EmailField, StringField, BooleanField, ImageField, URLField


class User(Document):
    """
    A class to represent a User document.

    :param meta: dict for define metadata of the document.
    :type meta: dict
    :param email: mail of the user.
    :type email: str
    :param username: username of the user.
    :type username: str
    :param password: password of the user.
    :type password: str
    :param isAdmin: define is the user is an admin.
    :type isAdmin: bool
    """
    meta = {'collection': 'user'}
    email = EmailField(unique=True, required=True, max_lenght=100)
    username = StringField(unique=True, max_length=100, required=True)
    password = StringField(required=True)
    isAdmin = BooleanField(default=False, required=False)

    @staticmethod
    def generate_hash(password: str) -> str:
        """
        Generate a hashing of the password
        :param password: string to hasing
        :type password: str

        :return: hash of the password
        :rtype hash: str
        """
        return pbkdf2_sha256.hash(password)

    @staticmethod
    def verify_hash(password: str, hash_: str) -> bool:
        """
        Verify if the password send correspond to the password hasing
        :param password: password to check
        :type password: str
        :param hash_: hash
        :type hash: str

        :return: True if the password correspond to hash
        :rtype: bool
        """
        return pbkdf2_sha256.verify(password, hash_)


class Project(Document):
    """
    Class to represent a project.

    :param meta: dict for define metadata of the document.
    :type meta: dict
    :param title: Title of the project
    :type title: str
    :param description: Content of the project
    :type description: str, optional
    :param image: Image of the project
    :type image: file, optional
    :param repo: Url of the repository of the project.
    :type repo: str, optional
    :param demo: Url to the demo of the project.
    :type demo: str, optional
    """
    meta = {'collection': 'project'}
    title = StringField(unique=True, max_length=100, required=True)
    description = StringField(required=False)
    image = ImageField(size=(800, 600, False))
    repo = URLField(default=None)
    demo = URLField(default=None)
