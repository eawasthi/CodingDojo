from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import re
app= Flask(__name__)
mysql = MySQLConnector(app,'registration')
app.secret_key="advanced"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def first():
    return render_template('index.html')


@app.route('/login1', methods=['POST'])
def login1():
    return render_template('login.html')

@app.route('/register', methods=['POST'])
def register():
    return render_template('register.html')


@app.route('/test', methods=['POST'])
def registration():
    session.clear()    
    session['first']=request.form['first_name']
    session['last']=request.form['last_name']
    session['email']=request.form['email']
    session['password']=request.form['password']
    session['password_confirm']=request.form['password_confirm']
    if len(session['email'])< 1:
        flash('You must enter a valid email','error')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!",'error')
    elif len(session['first'])< 1:
        flash('You must enter your first name','error')
    elif not (session['first']).isalpha():
        flash('Your name cannot contain numbers or special characters', 'error')
    elif len(session['last'])< 1:
        flash('You must enter your last name')
    elif not (session['last']).isalpha():
        flash('Your last name cannot contain numbers or special characters', 'error')
    elif len(session['password'])< 1:
        flash('You must enter a valid email')
    elif len(session['password'])< 8:
        flash('You must enter a password with more then 8 characters','error') 
    elif len(session['password_confirm'])< 1:
        flash('You must confirm your password')
    elif session['password'] != session['password_confirm']:
        flash("Password must match , nahin toh tere papa ko shikayat kar dunga",'error')
    else:
        flash('Thanks for submitting your information', 'success')
        query = "INSERT INTO users (first_name, last_name,email, password) VALUES (:first, :last, :email,:password)"
        data = {
                 'first': request.form['first_name'],
                 'last':  request.form['last_name'],
                 'email': request.form['email'],
                 'password':  request.form['password']
                }
        mysql.query_db(query, data)
        return render_template('welcome.html', user=session['first'])
    return render_template('register.html')


@app.route('/welcome', methods=['POST'])
def login():
    session['email']=request.form['email']
    query = 'SELECT email, password, users_id FROM users WHERE email = :email1 and password = :password1 and users_id > :0' 
    data = { 'email1': session['email'],
    { 'email1': session['email']
    }                      
    test = mysql.query_db(query, data) 
    print test[0]['email']
    print test[0]['password']

   
    return render_template('welcome.html')


app.run(debug=True, port=2022)