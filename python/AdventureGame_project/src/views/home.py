from flask import render_template, request, redirect, url_for, flash
from src import app

title='ADVENTURE GAME'

@app.route('/')
def index():
    # return 'Hello World!'
    return render_template('/Home/index.html', title=title)

@app.route('/Intro', methods = ['GET', 'POST'])
def intro():
    print(">>> You clicked the startButton")
    return render_template('/Intro/playerNum.html', title=title)

@app.route('/HowtoPlay')
def instructions():
    print(">>> You clicked the instructions")
    return render_template('/Intro/instructions.html', title="How to Play")

@app.route('/Intro/PlayerName', methods=['POST'])
def playername():
    print(">>> This is the player name input page")
    return render_template('/Intro/playerName.html', title="Player Names")
