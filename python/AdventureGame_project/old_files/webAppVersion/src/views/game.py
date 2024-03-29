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
    response, error = mp.validatePlayerNames(playerList)

    if response:
        print('>>>This is the player list: ', playerList)

        for playerName in playerList:
            playerObj = mp.User(playerName)
            print('>>> this is the value of the variable player: ', playerName)
            mp.addPlayerNameToDatabase(playerObj)

        return render_template('/Game/start.html', playerList=playerList)

    else:
        print(">>> Their are duplicates of the playerName(s) in the DB")

        playerNum = len(playerList)

        return render_template('/Intro/playerName.html', error=error, playerNum=playerNum)

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
            #this updates players status in db
            print('this is the current playerList: ', playerList)

            playerList.remove(playerName)

            print('playerList after removing player is: ', playerList)

            session['pl'] = playerList

            updatedPlayerList = session.get('pl')
            #remove player from playerList
            print('updated session PlayerList is: ', updatedPlayerList)

            return render_template('Game/dchapter.html',chNum = chNum, chText=chText, name=playerName)

        else:
            print('player is not dead')

            updatedPlayerList = mp.rotatePlayerList(playerName,playerList)

            session['pl'] = updatedPlayerList

            print('updatedPlayerList is: ', updatedPlayerList)

            question = story.questions[chNum]

            opA = str(chNum)+'A'
            print("opA is: ", opA)

            optionA = story.options[opA]

            opB = str(chNum)+ 'B'
            optionB = story.options[opB]

            return render_template('Game/chapter.html',chNum = chNum, chText=chText, name=playerName, question=question, optionA=optionA, optionB=optionB)

@game.route('/updatePlayer', methods=["POST"])
def updatePlayer():

    choice = request.form.get('choice')
    print('>>> The player choice is: ', choice)

    playerList = session.get('pl')
    print('>>> This is the playerList in the updatePlayer route: ', playerList)

    if not playerList:
        print('>>> if playerList is empty do not update anything')

    else:
        playerName = playerList[-1]
        print('>>> playerName is: ', playerName)

        chNum = mp.getChapterNumber(playerName)
        print('>>> chNum is: ', chNum)



        mp.updatePlayerChandChoice(playerName,choice,chNum)

    return redirect(url_for('game.gameEngine'))
