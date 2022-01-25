from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/event', methods = ['GET'])
def getEvent():
    return "not implemented yet"


@app.route('/event/<eventId>', methods = ['GET', 'PUT', 'DELETE'])
def eventByID():
    return "not implemented yet"


@app.route('/event/<date>', methods = ['GET'])
def getEventByDate():
    return "not implemented yet"


@app.route('/event/create', methods = ['POST'])
def createEvent():
    return "not implemented yet"


@app.route('/event/<eventId>/eligibleAdults', methods = ['GET'])
def getEligibleAdults():
    return "not implemented yet"



