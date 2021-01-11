from passlib.hash import pbkdf2_sha256
from flask_mongoengine import MongoEngine

db = MongoEngine()

class User(db.Document):
    meta = {'collection': 'user'}
    email = db.EmailField(required=True, max_lenght=100)
    username = db.StringField(uniq=True, max_length=100, required=True)
    password = db.StringField(required=True)

    @staticmethod
    def generate_hash(password):
        return pbkdf2_sha256.hash(password)

    @staticmethod
    def verify_hash(password, hash_):
        return pbkdf2_sha256.verify(password, hash_)
