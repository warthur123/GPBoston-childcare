from flask import Flask, jsonify
import psycopg2
import json
from views.children import children_blueprint
from views.adults import adults_blueprint
from views.events import events_blueprint
from views.constraints import constraints_blueprint

app = Flask(__name__)

POSTGRESQL_URI = "postgres://ourpesjoilxxyk:88ed6d3d6aa0e7fe169cc5947d3cc7ba5a99a20c34603454c504b225e8c26e03@ec2-52-70-25-37.compute-1.amazonaws.com:5432/d814m5eo6dqo4c"

try:
    conn = psycopg2.connect(POSTGRESQL_URI)
    print("YAY coneected")
except:
    print("I am unable to connect to the database")


app.register_blueprint(children_blueprint, url_prefix='/child')
app.register_blueprint(adults_blueprint, url_prefix='/adult')
#app.register_blueprint(events_blueprint, url_prefix='/event')
app.register_blueprint(constraints_blueprint, url_prefix='/constraint')





    

