""" Config file for flask app.
This file is use by flask app for define all variable.


"""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve()

# To generate a new secret key:
# >>> import random, string
# >>> "".join([random.choice(string.printable) for _ in range(24)])
SECRET_KEY = os.getenv('SECRET_KEY')

DEBUG = os.getenv('DEBUG')
HOST = os.getenv('HOST')
ADMIN_MAIL = os.getenv('ADMIN_MAIL')

MONGODB_SETTINGS = {
    'uri': os.getenv('MONGODB_HOST')
}

MAIL_BACKEND = os.getenv('MAIL_BACKEND')
MAIL_SERVER = os.getenv('MAIL_SERVER')
MAIL_PORT = os.getenv('MAIL_PORT')
MAIL_USERNAME = os.getenv('MAIL_USERNAME')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
MAIL_USE_TLS = os.getenv('MAIL_USE_TLS')
MAIL_USE_SSL = os.getenv('MAIL_USE_SSL')
MAIL_DEFAULT_SENDER = os.getenv('MAIL_DEFAULT_SENDER')
MAIL_DEBUG = os.getenv('MAIL_DEBUG')
