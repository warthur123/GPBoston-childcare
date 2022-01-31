from flask import Flask, jsonify
import psycopg2
import json
from views.children import children_blueprint
from views.adults import adults_blueprint
from views.events import events_blueprint
from views.constraints import constraints_blueprint

app = Flask(__name__)

POSTGRESQL_URI = ""

try:
    conn = psycopg2.connect(POSTGRESQL_URI)
    print("YAY coneected")
except:
    print("I am unable to connect to the database")


app.register_blueprint(children_blueprint, url_prefix='/child')
app.register_blueprint(adults_blueprint, url_prefix='/adult')
#app.register_blueprint(events_blueprint, url_prefix='/event')
app.register_blueprint(constraints_blueprint, url_prefix='/constraint')





    

