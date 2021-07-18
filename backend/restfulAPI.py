from flask_restful import Resource, reqparse
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required,
                                get_jwt_identity)

from werkzeug.security import check_password_hash, generate_password_hash
from main import db
from model import Pengguna

parser = reqparse.RequestParser()
parser.add_argument('email', help='email tidak boleh kosong', required=True)
parser.add_argument('nama', help='nama tidak boleh kosong', required=True)
parser.add_argument('password', help='password tidak boleh kosong', required=True)

class Registration(Resource):
    def post(self):
        req = parser.parse_args()
        if Pengguna.query.filter(Pengguna.email==req['email']).first():
            return {'error' : 'Pengguna telah tercatat'}
        
        input = Pengguna(email=req['email'], nama=req['nama'], password=generate_password_hash(req['password']))
        input.save()

        token = create_access_token(identity=req['email'])
        refresh = create_refresh_token(identity=req['email'])

        return {
            'email' : req['email'],
            'access_token_api' : token,
            'refresh_token_api' : refresh
        }

class Login(Resource):
    def post(self):
        try:
            req = parser.parse_args()
            identitas_diri = Pengguna.query.filter(Pengguna.email==req['email']).first()

            if not identitas_diri:
                return {'error' : 'Pastikan kamu sudah terdaftar'}

            if check_password_hash(identitas_diri.password, req['password']):
                token = create_access_token(identity=req['email'])
                refresh = create_refresh_token(identity=req['email'])
                return {
                    'email' : identitas_diri.email,
                    'access_token_api' : token,
                    'refresh_token_api' : refresh
                }
            else:
                return {'error' : 'Kesalahan token akses'}
        
        except:
            raise Exception('Tidak bisa login')