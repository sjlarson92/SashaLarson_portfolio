# ADVENTURE GAME

<!-- Project BIO -->
 Adventure Game is a web application that allows the user to play a text adventure game that is story based and the players choices determine the outcome.

 I created this project to practice and show my skill with Flask and developing a full stack web application.

This application displays some of my skills with:

- Flask
- MVC Web Framework
- MySQL



<!-- Screenshots -->
<div align="center">

### HOME PAGE
<img src= "/python/AdventureGame_project/images/StartGame.png" width= 60% length= 60%>

### INSTRUCTIONS
<img src= "/python/AdventureGame_project/images/Instructions.png" width= 60% length= 60%>

### NUMBER OF PLAYES
<img src= "/python/AdventureGame_project/images/PlayerNum.png" width= 60% length= 60%>

### PLAYER NAMES
<img src= "/python/AdventureGame_project/images/PlayerNames.png" width= 60% length= 60%>

### PLAYERS READY
<img src= "/python/AdventureGame_project/images/PlayerReady.png" width= 60% length= 60%>

### CHAPTERS
<img src= "/python/AdventureGame_project/images/Ch1P2.png" width= 60% length= 60%>

### PLAYER DIED
<img src= "/python/AdventureGame_project/images/PlayerDied.png" width= 60% length= 60%>

### GAME OVER
<img src= "/python/AdventureGame_project/images/GameOver.png" width= 60% length= 60%>


</div>
<!-- Code explanation -->
I run this application using Flask and MySQL for the database that is used for the players objects.

<!-- Code explanation -->
The application is setup using MVC methodology and uses models, views and templates to allow for a better organized application. I used Blueprints to set up so that each view had their own template folder and this allowed me to direct routes to the correct template and pass information easily.

<!-- Code snippet -->
You can see that in this code snippet which is locate in the Home view, that for the route to get the name of the Player(s) from the user I am first retrieving the number of players from the previous template and passing this variable in order to request the correct number of player names from the user.

```python

@home.route('/Intro/PlayerName', methods=['POST'])
def playername():
    print(">>> This is the player name input page")
    playerNum = int(request.form.get('player_num'))
    print(">>> The number of players is: ", playerNum)

    return render_template('/Intro/playerName.html', title="Player Names", playerNum=playerNum)

```

<!-- Code explanation -->
For the game engine I set up the application so that the players would be in a session and that the engine would keep running so long as there were players in the session. A list which I edited whenever a player died and so that when none remained the game over route would happen automatically.

<!-- Code snippet -->


```python

@game.route('/game', methods=['GET'])
def gameEngine():

    playerList = session.get('pl')

    if not playerList:
        print('>>> playerList is empty display Game Over')
        return render_template('/Game/gameOver.html')

```

<!-- Code explanation -->
So long as there was an active player I would get the player name, the current chapter number (which was saved to the player in the DB), and then pull the associated with this chapter and also based off of their previous choice(also saved to DB). Which would all be displayed to the player.

<!-- Code snippet -->

```python

# Continuation of previous code above
else:
      playerName = playerList[0]
      print('>>> playerName in gameEngine is: ', playerList[0])

      ch = mp.getChapterText(playerName)
      print('ch: ', ch)

      chText = story.chapters[ch]

      chNum = mp.getChapterNumber(playerName)
      print('chNum is: ', chNum)

```

<!-- Code explanation -->
I also checked the players status to see if their previous choice had led them to being killed off and if so to remove them from the playerList. This would then display their final chapter and text letting the player know that they'd lost.

<!-- Code snippet -->

```python

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

```
<!-- Code explanation -->
If the player had not died then I would update the playerList by rotating it and then pull the next chapter info based off of the players previous choice and display the chapter with the options.

<!-- Code snippet -->

```python

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

```
