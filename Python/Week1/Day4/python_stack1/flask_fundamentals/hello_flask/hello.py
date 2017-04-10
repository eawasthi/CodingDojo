from flask import Flask, render_template 
app = Flask(__name__) 

@app.route('/')         
def welcome():
   return render_template('welcome.html')

@app.route('/about')         
def about():
   return render_template('about.html')
   
@app.route('/projects')         
def projects():
   return render_template('projects.html')
   



app.run(debug=True) 



# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')
# def hello_world():
# 	return render_template('index.html')


# @app.route('/test')
# def success():
# 	return render_template('success.html')

# app.run(debug=True)