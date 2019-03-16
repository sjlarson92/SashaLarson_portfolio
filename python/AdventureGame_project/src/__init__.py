from flask import Flask, render_template
# import MySQLdb

app = Flask(__name__)

import src.views.home

if __name__ == "__main__":
    app.run(debug = True)
