""" Config file for flask app.
This file is use by flask app for define all variable.


"""
import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent

# See : https://pypi.org/project/python-dotenv/
ENV_PATH = Path.joinpath(BASE_DIR, '.env')

load_dotenv(ENV_PATH)

# To generate a new secret key:
# >>> import random, string
# >>> "".join([random.choice(string.printable) for _ in range(24)])
SECRET_KEY = os.getenv('SECRET_KEY')

DEBUG = os.getenv('DEBUG')

MONGODB_SETTINGS = {
    'uri': os.getenv('MONGODB_HOST')
}
