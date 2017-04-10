from flask import Flask, render_template, request,redirect
app = Flask(__name__)

@app.route('/')
def info():
	return render_template("info.html")

@app.route('/ninja')
def ninjas():
  	return render_template("ninja1.html")

@app.route('/ninja/<clr>')
def other(clr):
	if clr:
		for i in clr:
			if clr=="blue":
				turtle='1'
			elif clr=="orange":
				turtle='2'
			elif clr=="red":
				turtle='3'
			elif clr=="purple":
				turtle='4'
			else:
				turtle="other"
				
	return render_template('other.html', ninja = turtle)
app.run(debug=True,port=2022)