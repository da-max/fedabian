from flask import Flask, jsonify
from flask_graphql import GraphQLView
from flask_jwt_extended import JWTManager

from fedabian.models import db
from fedabian.schema import schema

app = Flask(__name__)

app.config.from_object('config')

jwt = JWTManager(app)
db.init_app(app)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    graphiql=True
))

@app.route('/')
def hello_world():
    return 'hello world'

if __name__ == '__main__':
    app.run()
