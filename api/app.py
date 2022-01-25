from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route("/", methods=['POST'])
def serve(path):
    return send_from_directory(app.static_folder,'index.html')