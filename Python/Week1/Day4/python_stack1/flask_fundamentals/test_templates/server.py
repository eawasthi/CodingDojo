from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html", phrase="hello1", times=2)
app.run(debug=True,port=2016)
