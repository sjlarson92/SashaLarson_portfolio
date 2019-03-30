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

    print ('>>> This is the game controller')

    return render_template('/Game/start.html', player_list=playerList)

@game.route('/game', methods=['GET'])
def gameEngine():

    playerList = session.get('pl')

    if not playerList:
        print('>>> playerList is empty display Game Over')
        return render_template('/Game/gameOver.html')


    # print('>>>> this is the player_list in the Game engine: ', playerList)
    # for playerName in playerList:
    #     playerObj = mp.getPlayerByName(playerName)
    #     print('players in the game engine are: ', playerName)
    #     print('>>> playerObj is: ', playerObj)
    #
    #     if playerObj[1] == 0:
    #         #play game
    #         print('>>> Player is still alive, it is ... turn: ', playerObj[0])
    #
    #         playerChoice = playerObj[2]
    #         chapter = playerObj[3]
    #         playerName = playerObj[0]
    #
    #         #TODO: Refactor this to funciton outside the controller
    #         ch = (str(chapter)+str(playerChoice))
    #         print('current ch is: ', ch)
    #         text = story.chapters[ch]
    #
    #         return render_template('Game/chapter.html',ch=chapter, name=playerName, choice=playerChoice, chapterText=text)
    #     else:
    #         #player is dead skip them
    #         print('>>>> player is dead. Game over')


    return render_template('Game/chapter.html')
    #  title= , name= , ch_num =
