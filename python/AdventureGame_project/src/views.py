from flask import render_template
from src import app

@app.route('/')
def index():
    # return 'Hello World!'
    return render_template('/Home/index.html')
