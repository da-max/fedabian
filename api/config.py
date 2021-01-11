""" Config file for flask app.
This file is use by flask app for define all variable.


"""
import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent

# See : https://pypi.org/project/python-dotenv/
ENV_PATH = BASE_DIR / '.env'

load_dotenv(ENV_PATH)

# To generate a new secret key:
# >>> import random, string
# >>> "".join([random.choice(string.printable) for _ in range(24)])
SECRET_KEY = os.getenv('SECRET_KEY')

MONGODB_SETTINGS = {
    'db': os.getenv('MONGODB_NAME'),
    'host': os.getenv('MONGODB_HOST')
}
