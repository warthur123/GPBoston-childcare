from flask import Blueprint, jsonify
from .connection import conn
adults_blueprint = Blueprint('adults_blueprint', __name__)



@adults_blueprint.route('/', methods = ['GET'])
def getAdult():
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM adults;")
            row_headers = [x[0] for x in cursor.description]
            adults = cursor.fetchall()
            json_data=[]
            for result in adults:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


@adults_blueprint.route('/<string:name>', methods = ['GET'])
def getAdultByName(name):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM adults WHERE CONCAT(first_name,last_name) = %s;", (name,))
            row_headers = [x[0] for x in cursor.description]
            adults = cursor.fetchall()
            json_data=[]
            for result in adults:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


@adults_blueprint.route('/<int:adultId>', methods = ['GET', 'PUT'])
def adultById(adultId):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM adults WHERE id = %s;", (adultId,))
            row_headers = [x[0] for x in cursor.description]
            adults = cursor.fetchall()
            json_data=[]
            for result in adults:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


@adults_blueprint.route('/add', methods = ['POST'])
def addAdult():
    return "not implemented yet"

@adults_blueprint.route('/<adultId>/recent', methods = ['GET'])
def getAdultEvents():
    return "not implemented yet"


@adults_blueprint.route('/<adultId>/all', methods = ['GET'])
def getAllAdultEvents():
    return "not implemented yet"