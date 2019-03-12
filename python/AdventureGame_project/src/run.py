from flask import Flask, render_template
import MySQLdb

app = Flask(__name__)

# app.config.from_pyfile('config.py')
#
# db = MySQLdb(app)
# #module object is not callable
@app.route('/')
def index():
    return render_template('Home/index.html')

if __name__ == "__main__":
    app.run(debug = True)
