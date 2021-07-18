from flask_mongoalchemy import MongoAlchemy
from main import db

class Pengguna(db.Document):
    email = db.StringField()
    nama = db.StringField()
    password = db.StringField()
    