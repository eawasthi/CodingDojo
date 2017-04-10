from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key="gold"
@app.route('/')
def gold():
	session['total']=0
	return render_template('main.html')


@app.route('/process_money', methods=['POST'])
def money():
	if request.form['building'] == 'farm':
		gold=random.randint(10,20)
		session['total']+=gold
		print session['total']
		session['log']="Earned",gold," golds from ", request.form['building']
		print session['log']
	elif request.form['building'] == 'cave':
		gold=random.randint(5,10)
		session['total']+=gold
		print session['total']
		session['log']="Earned",gold," golds from ", request.form['building']
	elif request.form['building'] == 'house':
		gold=random.randint(2,5)
		session['total']+=gold
		print session['total']
		session['log']="Earned",gold," golds from ", request.form['building']
	elif request.form['building'] == 'casino':
		gold=random.randint(-50,50)
		session['total']+=gold
		print session['total']
		session['log']="Earned",gold," golds from ", request.form['building']
	return render_template('main.html')
	

	return redirect('/')



app.run(debug=True, port=2020)