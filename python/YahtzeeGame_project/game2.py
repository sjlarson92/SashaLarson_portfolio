import random
import numpy as np

dice = []
diceMaxLength = 5
scoreBoard = []

welcomeLog =  """
Welcome to our Yahtzee game!
This is our project for HackFSU, 2017
Our team is made up of Lucas Costa, Sasha Larson and Devesh Waingakar"""

def main():
    print welcomeLog
    while True:
        try:
            numberOfPlayers = int(raw_input("\nPlease enter how many players there are: "))
        except ValueError:
            print "Please enter a numeric value"
            continue
        else:
            break
        #showScoreBoard(numberOfPlayers)
    names = playersCount(numberOfPlayers)
    firstRoll(names, numberOfPlayers)
    #rand()

def playersCount(numberOfPlayers):  #ask how many players there are, get their names. return playerNames

    playerNames = []

    print "That's awesome! Let's get everyone's names..."
    for index in range(0, numberOfPlayers):
        nameInput = raw_input("Player %s, please enter your name: " % (index + 1))
        playerNames.append(nameInput)

    print "Great! Here are all the players: "
    for index, name in enumerate(playerNames):
        print "%s: %s" % (index + 1, name)
    print "Good luck to the %s of you!" % numberOfPlayers
    return playerNames

def firstRoll(names, numberOfPlayers):   #allow players to start, calling them by name
    for i in names:
        raw_input("\n%s: it's your turn. Press ENTER to roll the dice" % i)
        for i in range(diceMaxLength):
            dice.append(random.randint(1,6))
        print dice

        choice = raw_input("\nPress ENTER to continue, or z to keep your score ")
        if choice == 'z':
            score(dice)
            showScoreBoard(numberOfPlayers, names)
        else:
            rollagain(dice)
            print dice
            choice1 = raw_input("\nPress ENTER to continue, or z to keep your score ")
            if choice1 == 'z':
                score(dice)
                showScoreBoard(numberOfPlayers, names)
            else:
                rollagain(dice)
                print dice
                showScoreBoard(numberOfPlayers, names)


def rollagain(dice):
    while True:
        try:
        	i = int(raw_input("Choose indexes of the dice you want to REROLL separated by commas "))
        except ValueError:
            print "Please enter an index. Ex: 1, 2, 3 or 4"
            continue
        else:
            break
	new_i = [ int(k) for k in i.split(",")]
	new_i = np.array(new_i) - 1
	for index in new_i:
	    dice[index] = np.random.randint(1,7)
	dice

        """check for any possible combos
        allow user to do one of the following:
            1- reroll dice
            2- end turn, and choose score
                2.1 - show player any available combos to pick from, along with scoreboard
                2.2 - ask which score they want to keep or remove
        """

def showScoreBoard(numberOfPlayers, names):
    print "\n\t--- SCOREBOARD ---"
    scoreBoard = [[' ' for i in range(numberOfPlayers + 2)] for j in range(16)]
    for i in range(1, 15):
        scoreBoard[i][0] = i
    for j in range(numberOfPlayers + 1):
        scoreBoard[0][j] = names

    scoreBoard[0][0] = "Entry #"
    scoreBoard[0][1] = "Possibilites"
    scoreBoard[1][1] = "One's"
    scoreBoard[2][1] = "Two's"
    scoreBoard[3][1] = "Three's"
    scoreBoard[4][1] = "Four's"
    scoreBoard[5][1] = "Five's"
    scoreBoard[6][1] = "Bonus"
    scoreBoard[7][1] = "Subtotal"
    scoreBoard[8][1] = "Pair"
    scoreBoard[9][1] = "3 of a kind"
    scoreBoard[10][1] = "4 of a kind"
    scoreBoard[11][1] = "Full house"
    scoreBoard[12][1] = "Straight"
    scoreBoard[13][1] = "Chance"
    scoreBoard[14][1] = "Yahtzee"
    scoreBoard[15][1] = "Total"


    for row in scoreBoard:
        print ''.join(['%12s' % i for i in row])


def rand():
    for i in range(5):
        dice.append(random.randint(1,6))
    print dice

if __name__ == '__main__':
    main()
