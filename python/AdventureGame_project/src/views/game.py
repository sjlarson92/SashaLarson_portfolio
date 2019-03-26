from flask import Blueprint, render_template, request, redirect, url_for, flash
from src import app
from src.models import players

mp = players

game = Blueprint('game', __name__)

title='ADVENTURE GAME'

@game.route('/start', methods=['POST'])
def start():
    player_list = request.form.getlist('player_name')
    # id = request.form.get('id')
    #
    # player_list = []

    print('>>>This is the player list: ', player_list)

    for player in player_list:

        player_obj = mp.User(player)
        print('>>> this is the value of the variable player: ', player)
        mp.addPlayerNameToDatabase(player_obj)

    print ('>>> This is the game controller')

    return render_template('/Game/ch1.html', title=title, name=name)
