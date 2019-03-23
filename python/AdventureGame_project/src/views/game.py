from flask import Blueprint, render_template, request, redirect, url_for, flash
from src import app
from src.models import players

mp = players

game = Blueprint('game', __name__)

title='ADVENTURE GAME'

@game.route('/start', methods=['POST'])
def start():
    name = request.form.get('player_name')
    print('>>>This is the player name: ', name)

    player_obj = mp.User(name)

    mp.addPlayerNameToDatabase(player_obj)

    print ('>>> This is the game controller')

    return render_template('/Game/ch1.html', title=title, name=name)
