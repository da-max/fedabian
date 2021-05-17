from flask import Flask
from mongoengine import connect
from flask_cors import CORS
from flask_graphql import GraphQLView
from flask_jwt_extended import JWTManager
from flask_mailman import Mail

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object('config')
    CORS(app)
    connect(host=app.config['MONGODB_SETTINGS']['uri'])
    JWTManager(app)
    Mail(app)

    from schema import schema

    app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True
    ))
    return app


app = create_app()

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'], host=app.config['HOST'])
