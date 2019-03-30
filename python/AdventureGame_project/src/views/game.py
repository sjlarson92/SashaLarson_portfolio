from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from src import app
from src.models import players

mp = players

game = Blueprint('game', __name__)

title='ADVENTURE GAME'

@game.route('/start', methods=['POST'])
def start():
    playerList = request.form.getlist('player_name')

    session['pl'] = playerList
    #saves player_list to session variable

    print('>>>This is the player list: ', playerList)

    for playerName in playerList:
        playerObj = mp.User(playerName)
        print('>>> this is the value of the variable player: ', playerName)
        mp.addPlayerNameToDatabase(playerObj)

    print ('>>> This is the game controller')

    return render_template('/Game/start.html', player_list=playerList)

@game.route('/game', methods=['GET'])
def gameEngine():

    playerList = session.get('pl')

    print('>>>> this is the player_list in the Game engine: ', playerList)
    for playerName in playerList:
        playerObj = mp.getPlayerByName(playerName)
        print('players in the game engine are: ', playerName)
        print('>>> playerObj is: ', playerObj)
    print(">>>>This is player in the game engine")




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
