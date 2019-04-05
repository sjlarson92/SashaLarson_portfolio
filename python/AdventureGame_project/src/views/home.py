from flask import Blueprint, render_template, request, redirect, url_for, flash
from src import app, views

home = Blueprint('home', __name__)

title='ADVENTURE GAME'

@home.route('/')
def index():
    # return 'Hello World!'
    return render_template('/Home/index.html', title=title)

@home.route('/Start', methods = ['GET', 'POST'])
def intro():
    print(">>> You clicked the startButton")
    return render_template('/Intro/playerNum.html', title=title)

@home.route('/HowtoPlay')
def instructions():
    print(">>> You clicked the instructions")
    return render_template('/Intro/instructions.html', title="How to Play")

@home.route('/Intro/PlayerName', methods=['POST'])
def playername():
    print(">>> This is the player name input page")
    playerNum = int(request.form.get('player_num'))
    print(">>> The number of players is: ", playerNum)

    #can i put a forloop here to render_template for num of players??

    # for i in range(1,playerNum+1):
    #     print('>>> This is inside the playername for loop')
    return render_template('/Intro/playerName.html', title="Player Names", playerNum=playerNum)
