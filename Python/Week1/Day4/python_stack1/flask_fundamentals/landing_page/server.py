from flask import Flask, render_template,redirect, request
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ninja')
def ninja():
    return render_template("ninjas.html")

@app.route('/dojos/new')
def dojo():
	return render_template("dojos.html")
app.run(debug=True,port=2017)
