from flask import render_template
from . import app

@app.route('/')
def Index():
    return render_template('/Home/Index')
