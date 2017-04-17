from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'full_friend')

@app.route('/')
def index():
    query = "SELECT * FROM users"                           
    test = mysql.query_db(query)                          
    return render_template('index.html', all_friends=test) 


@app.route('/users', methods=['POST'])
def create():
	query = "INSERT INTO users (name, age, created_at) VALUES (:name, :age, NOW())"

	data = {
	     'name': request.form['name'],
	     'age':  request.form['age']
	   }

	mysql.query_db(query, data)
    # add a friend to the database!
	return redirect('/')

app.run(debug=True)

# @app.route('/users/<id>')
# def show(id):
# 	query = "SELECT * FROM users WHERE id = :specific_id"
# 	data = {'specific_id': id}
# 	users = mysql.query_db(query, data)
#     # add a friend to the database!
# 	return render_template('index.html', one_friend=users[0])