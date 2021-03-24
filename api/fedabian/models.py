from passlib.hash import pbkdf2_sha256
from mongoengine import Document
from mongoengine.fields import DateTimeField, EmailField, ReferenceField, StringField


class User(Document):
    meta = {'collection': 'user'}
    email = EmailField(unique=True, required=True, max_lenght=100)
    username = StringField(unique=True, max_length=100, required=True)
    password = StringField(required=True)

    @staticmethod
    def generate_hash(password):
        return pbkdf2_sha256.hash(password)

    @staticmethod
    def verify_hash(password, hash_):
        return pbkdf2_sha256.verify(password, hash_)
