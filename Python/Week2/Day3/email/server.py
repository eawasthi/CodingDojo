
from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
# the "re" module will let us perform some regular expression operations
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
mysql = MySQLConnector(app,'email')


app.secret_key = "ThisIsSecret!"
@app.route('/', methods=['GET'])
def index():
  return render_template("index.html")


@app.route('/success', methods=['POST'])
def success():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    else:
        flash("Success!")
	query = "INSERT INTO users (email, created_at) VALUES (:email, NOW())"
	data = {
	     'email': request.form['email'],
		   }
	mysql.query_db(query, data)

    query3 = "SELECT * FROM users"                           
    test = mysql.query_db(query3)                       
    return render_template("index.html",varInHtml=test)


app.run(debug=True)
