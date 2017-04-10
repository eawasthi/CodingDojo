from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key='what'
@app.route('/')
def guess_game():
	return render_template('guessgame.html')

@app.route('/test',methods=["POST"])
def test():
	session['random']=random.randint(1,101)
	# INT is used to convert request.form into number
	session['num']=int(request.form['num'])
	#print session['num'],session['random']	
	if session['num']==session['random']:
		print "you guessed right"
		match="same"

	elif session['num']>session['random']:
		print "you guessed high"
		match="high"
	elif session['num']<session['random']:
		print "you guessed low"
		match="low"

	return render_template('guessgame.html',photo=match)

@app.route('/reset')
def reset():
	session.pop(session['num'],None)
	return redirect("/")


app.run(debug=True, port=1995)
