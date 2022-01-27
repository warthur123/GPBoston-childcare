from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/constraint', methods = ['GET'])
def getConstraint():
    return "not implemented yet"


@app.route('/constraint/<id>', methods = ['GET', 'PUT', 'DELETE'])
def constraintById():
    return "not implemented yet"


@app.route('/constraint/<date>', methods = ['GET'])
def getConstraintByDate():
    return "not implemented yet"


@app.route('/constraint/add', methods = ['POST'])
def addConstraint():
    return "not implemented yet"


