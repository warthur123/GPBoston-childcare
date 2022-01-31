from flask import Blueprint, jsonify
from .connection import conn
events_blueprint = Blueprint('events_blueprint', __name__)



@events_blueprint.route('/event', methods = ['GET'])
def getEvents():
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM events;")
            row_headers = [x[0] for x in cursor.description]
            events = cursor.fetchall()
            json_data=[]
            for result in events:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


@events_blueprint.route('/<int:eventId>', methods = ['GET', 'PUT', 'DELETE'])
def eventByID(eventId):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM events WHERE id = %s;", (eventId))
            row_headers = [x[0] for x in cursor.description]
            events = cursor.fetchall()
            json_data=[]
            for result in events:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


@events_blueprint.route('/<date:date>', methods = ['GET'])
def getEventByDate(date):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM events WHERE start_date < %s < end_date ;", (date))
            row_headers = [x[0] for x in cursor.description]
            events = cursor.fetchall()
            json_data=[]
            for result in events:
                json_data.append(dict(zip(row_headers,result)))
    return jsonify(json_data)


@events_blueprint.route('/create', methods = ['POST'])
def createEvent():
    return "not implemented yet"


@events_blueprint.route('/<eventId>/eligibleAdults', methods = ['GET'])
def getEligibleAdults():
    return "not implemented yet"