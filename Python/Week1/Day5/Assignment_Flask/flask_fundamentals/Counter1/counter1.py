from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key="Hello"
@app.route('/')
def counter1():
	if 'i' not in session:
		session['i']=0
	else:
		session['i']=session['i']+1
	return render_template('counter1.html')
@app.route('/addtwo')
def addtwo():
	session['i']=session['i']+2
	return render_template('counter1.html')
@app.route('/add1')
def add1():
	session['i']=1
	return render_template('counter1.html')
app.run(debug=True, port=1989)


