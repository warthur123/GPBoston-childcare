from flask import Blueprint, jsonify
from .connection import conn
children_blueprint = Blueprint('children_blueprint', __name__)

# @route children/   
# @desc  get all children
@children_blueprint.route("/")
def getChild():
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM children;")
            row_headers = [x[0] for x in cursor.description]
            children = cursor.fetchall()
            json_data=[]
            for result in children:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


# @route child/name   
# @desc  get all children
@children_blueprint.route('/<string:name>', methods = ['GET'])
def getChildByName(name):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM children WHERE CONCAT(first_name,last_name) = %s;", (name,))
            row_headers = [x[0] for x in cursor.description]
            children = cursor.fetchall()
            json_data=[]
            for result in children:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


@children_blueprint.route('/<int:childId>', methods = ['GET', 'PUT'])
def ChildById(childId):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM children WHERE id = %s;", (childId,))
            row_headers = [x[0] for x in cursor.description]
            children = cursor.fetchall()
            json_data=[]
            for result in children:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)



@children_blueprint.route('/add', methods = ['POST'])
def addChild():
    return "not implemented yet"
