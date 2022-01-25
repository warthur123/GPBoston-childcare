from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/child', methods = ['GET'])
def getChild():
    return "not implemented yet"


@app.route('/child/<name>', methods = ['GET'])
def getChildByName():
    return "not implemented yet"


@app.route('/child/<childId>', methods = ['GET', 'PUT'])
def ChildById():
    return "not implemented yet"


@app.route('/child/add', methods = ['POST'])
def addChild():
    return "not implemented yet"




