from flask import Blueprint, jsonify
from .connection import conn
constraints_blueprint = Blueprint('constraints_blueprint', __name__)



# Constraints
@constraints_blueprint.route('/', methods = ['GET'])
def getConstraint():
    return "not implemented yet"


@constraints_blueprint.route('/<id>', methods = ['GET', 'PUT', 'DELETE'])
def constraintById():
    return "not implemented yet"


@constraints_blueprint.route('/<date>', methods = ['GET'])
def getConstraintByDate():
    return "not implemented yet"


@constraints_blueprint.route('/add', methods = ['POST'])
def addConstraint():
    return "not implemented yet"