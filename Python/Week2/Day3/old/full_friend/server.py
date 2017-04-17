# from flask import Flask, request, redirect, render_template, session, flash
# from mysqlconnection import MySQLConnector
# app = Flask(__name__)
# mysql = MySQLConnector(app, 'full_friend')
# @app.route('/')
# def index():
# 	return render_template('index.html')
# @app.route('/friends', methods=['POST'])
# def create():
#     # add a friend to the database!
# 	return redirect('/')
# app.run(debug=True)
# app.run(debug=True,port=5018)
from flask import Flask
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'full_friend')
# an example of running a query
print mysql.query_db("SELECT * FROM users")
app.run(debug=True)