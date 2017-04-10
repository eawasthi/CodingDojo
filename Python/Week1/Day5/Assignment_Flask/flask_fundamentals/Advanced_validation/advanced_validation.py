from flask import Flask, render_template, request, redirect, session, flash
import re
app= Flask(__name__)
app.secret_key="advanced"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def advance_validation():
	return render_template('advanced_validation.html')
@app.route('/advanced', methods=['POST'])
def test_advanced():
	session.clear()
	session['email']=request.form['email']
	session['first']=request.form['first']
	session['last']=request.form['last']
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
		#return render_template('validation.html')
	return redirect('/')

app.run(debug=True, port=2022)