from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
# import MySQLdb
app = Flask(__name__)

app.config['SECRET_KEY'] ='_5#y2L"F4Q8z\xec]/'
app.config['SQLALCHEMY_DATABASE_URI'] = ''

from src.views.home import home
from src.views.game import game

app.register_blueprint(home)
app.register_blueprint(game)

import src.views.home
# import src.views.game
if __name__ == "__main__":
    app.run(debug = True)
