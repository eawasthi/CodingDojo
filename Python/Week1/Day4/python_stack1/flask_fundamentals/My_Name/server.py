from flask import Flask, render_template,redirect, request
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/route')
def info():
    return render_template("info.html")

# @app.route('/result')
# def info():
#    # print "Got Post Info"
#    # name = request.form['name']
#    # location = request.form['location']
#    # language = request.form['language']
#    # comment = request.form['comment']
#    return render_template("info.html")

app.run(debug=True,port=2018)