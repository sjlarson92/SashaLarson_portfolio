from flask import render_template, request, redirect, url_for, flash
from src import app


@app.route('/')
def index():
    # return 'Hello World!'
    return render_template('/Home/index.html', title='ADVENTURE GAME')

@app.route('/Intro', methods = ['GET', 'POST'])
def intro():
    print(">>>>this is the info route")
    if "startButton" in request.form:
        print(">>> You clicked the startButton")
        return render_template('/Intro/playerNum.html')
    elif "instructions" in request.form:
        print(">>> You clicked the instructions")
        return render_template('/Intro/instructions.html')


    # button = request.form.get('name')
    # print('>>>>>>this is the name of the button: ', button)
    #
    # if name == return render_template("")
