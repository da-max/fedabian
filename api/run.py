from flask import Flask
from mongoengine import connect
from flask_graphql import GraphQLView
from flask_jwt_extended import JWTManager

from schema import schema

app = Flask(__name__)

app.config.from_object('config')

connect(host=app.config['MONGODB_SETTINGS']['uri'])


jwt = JWTManager(app)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    graphiql=True
))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
