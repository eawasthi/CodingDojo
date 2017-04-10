from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
	session['name'] = request.form['name']
	session['email'] = request.form['email']
	#return redirect('/vipul')
	return render_template('show.html')

# @app.route('/vipul')
# def show_user():
# 	return render_template('show.html')
app.run(debug=True)