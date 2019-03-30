from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from src import app
from src.models import players

mp = players

game = Blueprint('game', __name__)

title='ADVENTURE GAME'

@game.route('/start', methods=['POST'])
def start():
    player_list = request.form.getlist('player_name')

    session['pl'] = player_list

    print('>>>This is the player list: ', player_list)

    for player in player_list:

        player_obj = mp.User(player)
        print('>>> this is the value of the variable player: ', player)
        mp.addPlayerNameToDatabase(player_obj)

    print ('>>> This is the game controller')

    return render_template('/Game/start.html', player_list=player_list)

@game.route('/game', methods=['GET'])
def gameEngine():

    player_list = session.get('pl')
    #player_list = request.args.getlist('player_list')
    print('>>>> this is the player_list in the Game engine: ', player_list)
    # for i in player_list:
    #     player_obj = mp.getPlayerNamebyID(i)
    #     print(">>>>This is player in the game engine")



        #call mysql function to get player name by id number and pull player choice and value of dead column
    #loop through players by id
    #if player is alive then display chapter(starting with ch1)
    #request chioce input from player
    #save chioce to db
    #iterate to next player until all living players have made a decision for the ch
    #end loop
    #change current chapter to the next chapter and continue

    return render_template('Game/chapter.html')
    #  title= , name= , ch_num =
