from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisisSecret'
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
# @app.route('/users', methods=['POST'])
# def create_user():
#    print "Got Post Info"
#    # we'll talk about the following two lines after we learn a little more
#    # about forms
#    name = request.form['name']
#    email = request.form['email']
#    # redirects back to the '/' route
#    return redirect('/')

@app.route('/ekta', methods=['POST'])
def create_user():
	print "Got Post Info"
# recall the name attributes we added to our form inputs
# to access the data that the user input into the fields we use request.form['name_of_input']
	session['name'] = request.form['name']
	session['email'] = request.form['email']
	print request.form
	return redirect('/show')
#return redirect('/') # redirects back to the '/' route

@app.route('/show')
def show_user():
 return render_template('user.html')

app.run(debug=True,port=1989) # run our server