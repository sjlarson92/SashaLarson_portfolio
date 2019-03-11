from flask import Flask
import MySQLdb

app = Flask(__name__)

app.config.from_pyfile('config.py')

db = MySQLdb(app)
#module object is not callable

if __name__ == "__main__":
    app.run(debug = True)
