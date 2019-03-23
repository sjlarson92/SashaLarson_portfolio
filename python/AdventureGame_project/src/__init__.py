from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import re

app = Flask(__name__)

from src.views.home import home
from src.views.game import game

app.register_blueprint(home)
app.register_blueprint(game)

import src.views.home
# import src.views.game
if __name__ == "__main__":
    app.run(debug = True)
