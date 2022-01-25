from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/adult', methods = ['GET'])
def getAdult():
    return "not implemented yet"


@app.route('/adult/<name>', methods = ['GET'])
def getAdultByName():
    return "not implemented yet"


@app.route('/adult/<adultId>', methods = ['GET', 'PUT'])
def adultById():
    return "not implemented yet"


@app.route('/adult/add', methods = ['POST'])
def addAdult():
    return "not implemented yet"

@app.route('/adult/<adultId>/recent', methods = ['GET'])
def getAdultEvents():
    return "not implemented yet"


@app.route('/adult/<adultId>/all', methods = ['GET'])
def getAllAdultEvents():
    return "not implemented yet"




