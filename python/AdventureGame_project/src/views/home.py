from flask import render_template, request, redirect, url_for, flash
from src import app

title='ADVENTURE GAME'

@app.route('/')
def index():
    # return 'Hello World!'
    return render_template('/Home/index.html', title=title)

@app.route('/Intro', methods = ['GET', 'POST'])
def intro():
    print(">>>>this is the info route")
    if "startButton" in request.form:
        print(">>> You clicked the startButton")
        return render_template('/Intro/playerNum.html', title=title)
    elif "instructions" in request.form:
        print(">>> You clicked the instructions")
        return render_template('/Intro/instructions.html', title="How to Play")


    # button = request.form.get('name')
    # print('>>>>>>this is the name of the button: ', button)
    #
    # if name == return render_template("")
