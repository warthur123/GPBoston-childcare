from flask import Flask
import psycopg2

app = Flask(__name__)

POSTGRESQL_URI = "postgres://ourpesjoilxxyk:88ed6d3d6aa0e7fe169cc5947d3cc7ba5a99a20c34603454c504b225e8c26e03@ec2-52-70-25-37.compute-1.amazonaws.com:5432/d814m5eo6dqo4c"

try:
    conn = psycopg2.connect(POSTGRESQL_URI)
    print("YAY coneected")
except:
    print("I am unable to connect to the database")

# Child
@app.route("/child")
def getChild():
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM children;")
            children = cursor.fetchall()
    return str(children)


@app.route('/child/<string:name>', methods = ['GET'])
def getChildByName(name):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM children WHERE CONCAT(first_name,last_name) = %s;", (name,))
            children = cursor.fetchall()
    return str(children)


@app.route('/child/<int:childId>', methods = ['GET', 'PUT'])
def ChildById(childId):
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM children WHERE id = %s;", (childId,))
            children = cursor.fetchall()
    return str(children)


@app.route('/child/add', methods = ['POST'])
def addChild():
    return "not implemented yet"



# Adult
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


# Events
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

    

# Constraints
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