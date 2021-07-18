from main import app, api,db
from restfulAPI import Login, Registration
from model import Pengguna
from flask import jsonify

@app.route('/')
def rest():
    return jsonify({'message' : 'backend yang digunakan python'})

api.add_resource(Login, '/login')
api.add_resource(Registration, '/daftar')

if __name__ == '__main__':
    app.run(debug=True)