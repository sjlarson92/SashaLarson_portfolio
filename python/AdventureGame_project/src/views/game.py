from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from src import app
from src.models import players
from src.docs import story

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

    #print ('>>> This is the game controller')

    return render_template('/Game/start.html', player_list=playerList)

@game.route('/game', methods=['GET'])
def gameEngine():

    playerList = session.get('pl')

    if not playerList:
        print('>>> playerList is empty display Game Over')
        return render_template('/Game/gameOver.html')

    else:
        playerName = playerList[0]
        print('>>> playerName in gameEngine is: ', playerList[0])

        ch = mp.getChapterText(playerName)
        print('ch: ', ch)

        chText = story.chapters[ch]

        chNum = mp.getChapterNumber(playerName)
        print('chNum is: ', chNum)

        #this calls a function to check if player will die and updates their status if they do
        playerStatus = mp.didPlayerDie(ch)
        print('playerStatus is: ', playerStatus)

        if playerStatus:
            mp.killPlayer(playerName)
            #remove player from playerList
        else:
            return('player is not dead')
            #move player[0] to the end of the playerlist



    return render_template('Game/chapter.html',chNum = chNum, chText=chText, name=playerName)
