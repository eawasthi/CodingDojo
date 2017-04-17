
from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'wall')
app.secret_key="advanced"

@app.route('/')
def index():
	return render_template('index.html') 


#This is Route for Register
@app.route('/welcome', methods=['POST'])
def welcome():
	query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name,:last_name,:email,:password,NOW(),NOW())"
	data={
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email'],
		'password': request.form['password']
	}
	user_id=mysql.query_db(query, data)
	session['user_id']=user_id
	return render_template('welcome.html')



@app.route('/login', methods=['POST'])
def login():
	query = "SELECT * FROM users WHERE email=:email LIMIT 1"
	data = {
		'email': request.form['email']
	}                           
	user = mysql.query_db(query,data)
	session['user']=user
	if user:
		return render_template('welcome.html')
	else:
		flash('email is invalid')
	return redirect('/')


@app.route('/messege', methods=['POST'])
def comment():
	query= "INSERT INTO messeges (messege) VALUES (:messege)"
	data = {
	     'messege': request.form['messege']
	   }
	mysql.query_db(query, data)
	#print request.form['comment']
	return redirect('/')


@app.route('/delete')
def logout():
	session.clear()
	return redirect('/')

app.run(debug=True, port=2015)