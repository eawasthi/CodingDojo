from flask import Flask, render_template, request, redirect, session, flash
import random
app= Flask(__name__)
app.secret_key="gold"
@app.route('/')
def basic_valid():
	return render_template('basic_validation.html')
@app.route('/validation', methods=['POST'])
def test_validation():
	session.clear()
	session['name']=request.form['name']
	session['location']=request.form['location']
	session['language']=request.form['language']
	session['comment1']=request.form['comment1']
	if len(session['name']) < 1:
		flash('You must enter a name')
	elif len(session['comment1']) < 1:
		flash('You must enter a comment')
	elif len(session['comment1']) > 120:
		flash('comment is too long')
	else:
		return render_template('display.html')

	return redirect('/')


app.run(debug=True, port=2021)
