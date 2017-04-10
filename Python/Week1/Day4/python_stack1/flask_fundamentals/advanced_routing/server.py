from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
	return render_template("index.html",name="Ekta")
app.run(debug=True,port=1991)