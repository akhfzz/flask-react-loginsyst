from flask import Flask
from flask_mongoalchemy import MongoAlchemy
from flask_restful import Api
from flask_jwt_extended import JWTManager
from flask_cors import CORS

#config
app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'login-system-react'
app.config['MONGOALCHEMY_DATABASE'] = 'loginsystem'
app.config['MONGOALCHEMY_CONNECTION_STRING'] = 'mongodb://127.0.0.1:27017/loginsystem'

#database mongo
db = MongoAlchemy(app)

#api setup
api = Api(app)

#jwt token
jwt = JWTManager(app)

#cors
CORS(app)


