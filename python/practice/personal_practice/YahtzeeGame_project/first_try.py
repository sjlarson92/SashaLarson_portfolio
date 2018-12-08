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
    numberOfPlayers = int(raw_input("\nPlease enter how many players there are: "))
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
    return nameInput

def firstRoll(names, numberOfPlayers):   #allow players to start, calling them by name
    for index in names:
        raw_input("\n%s: it's your turn. Press ENTER to roll the dice" % index)
        for i in range(diceMaxLength):
            dice.append(random.randint(1,6))
        print dice

        choice = raw_input("\nPress ENTER to continue, or z to keep your score ")
        if choice == 'z':
            ch = score()
	    sco= bubblesort(dice)
            showScoreBoard(numberOfPlayers, names, ch, sco)
        else:
            rollagain(dice)
            print dice
            choice1 = raw_input("\nPress ENTER to continue, or z to keep your score ")
            if choice1 == 'z':
                ch= score()
		sco= bubblesort(dice)
                showScoreBoard(numberOfPlayers, names, ch, sco)
            else:
                rollagain(dice)
                print dice
		ch=score()
		sco= bubblesort(dice)
                showScoreBoard(numberOfPlayers, names, ch, sco)


def rollagain(dice):
	print "Choose indexes of the dice you want to REROLL separated by commas"
	i = raw_input()
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
def score():
	print "Enter the choice of score you would like to be considered: "
	sc_choice = raw_input()
	return sc_choice


def showScoreBoard(numberOfPlayers, names, sc_choice, score):
    print "\n\tSCOREBOARD"
    scoreBoard = [[' ' for i in range(numberOfPlayers + 2)] for j in range(16)]
    for i in range(1, 15):
        scoreBoard[i][0] = i
    for j in range(numberOfPlayers + 1):
        scoreBoard[0][j] = names
    for k in range(14):
	scoreBoard[sc_choice][j]= score

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



def winner(dice):

	#Yahtzee
	if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
	    print "YAHTZEE!"
	    winnerIndex = 50
	#     #Four of a kind roll possibilites

	if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You have four of a kind"
	    winnerIndex = dice[0] + dice[1] + dice[2] + dice[3]

	if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
	    print "You have four of a kind"
	    winnerIndex = dice[0] + dice[1] + dice[2] + dice[4]

	if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
	    print "You have four of a kind"
	    winnerIndex = dice[0] + dice[1] + dice[4] + dice[3]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
	    print "You have four of a kind"
	    winnerIndex = dice[0] + dice[4] + dice[2] + dice[3]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] == dice[3] and dice[1] == dice[4]:
	    print "You have four of a kind"
	    winnerIndex = dice[4] + dice[1] + dice[2] + dice[3]
	    #print winnerIndex

	#Three of a kind possibilites
	if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[0] + dice[3] + dice[4]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[0] + dice[2] + dice[4]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[0] + dice[2] + dice[3]
	    #print winnerIndex

	if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[0] + dice[1] + dice[4]
	    #print winnerIndex

	if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[0] + dice[1] + dice[3]
	    #print winnerIndex

	if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[0] + dice[1] + dice[2]
	    #print winnerIndex

	if dice[4] == dice[3] and dice[4] == dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
	    print "You have three of a kind"
	    winnerIndex = dice[4] + dice[2] + dice[3]
	    #print winnerIndex

	if dice[4] == dice[3] and dice[4] != dice[2] and dice[4] == dice[1] and dice[4] != dice[0]:
	    print "You have three of a kind"
	    winnerIndex = dice[4] + dice[1] + dice[3]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] == dice[3] and dice[1] != dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[1] + dice[2] + dice[3]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] != dice[3] and dice[1] == dice[4]:
	    print "You have three of a kind"
	    winnerIndex = dice[1] + dice[2] + dice[4]
	    #print winnerIndex

	#Pair roll possibilites
	if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
	    print "You have a pair"
	    winnerIndex = dice[0] + dice[2]
	    #print winnerIndex

	if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
	    print "You have a pair"
	    winnerIndex = dice[0] + dice[1]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
	    print "You have a pair"
	    winnerIndex = dice[0] + dice[2]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You have a pair"
	    winnerIndex = dice[0] + dice[3]
	    #print winnerIndex
	if dice[0] != dice[1] and dice[1] != dice[2] and dice[1] != dice[3] and dice[1] == dice[4]:
	    print "You have a pair"
	    winnerIndex = dice[1] + dice[4]
	    #print winnerIndex
	if dice[4] != dice[3] and dice[4] == dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
	    print "You have a pair"
	    winnerIndex = dice[4] + dice[2]
	    #print winnerIndex

	if dice[4] == dice[3] and dice[4] != dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
	    print "You have a pair"
	    winnerIndex = dice[4] + dice[3]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] != dice[3] and dice[1] != dice[4]:
	    print "You have a pair"
	    winnerIndex = dice[1] + dice[2]
	    #print winnerIndex

	if dice[4] != dice[3] and dice[3] == dice[2] and dice[3] != dice[1] and dice[3] != dice[0]:
	    print "You have a pair"
	    winnerIndex = dice[3] + dice[2]
	    #print winnerIndex

	if dice[0] != dice[1] and dice[1] != dice[2] and dice[1] == dice[3] and dice[1] != dice[4]:
	    print "You have a pair"
	    winnerIndex = dice[1] + dice[3]
	    #print winnerIndex
	if new ==straight:
   	    print "You have a straight"
            winnerIndex = 20
    	    #print winnerIndex
	    k=0

	#Fullhouse
	if new[0] == new[1] and new[0] == new[2] and new[3]== new[4] and new[0]!=new[3]:
	    print "Fullhouse"
	    winnerIndex = new[0] + new[1] + new[2] + new[3] + new[4]
	    print winnerIndex
	elif new[2] == new[3] and new[2] == new[4]:
	    k=1
	if new[0] == new[1] and k==1 and new[0] != new[3]:
	    #print "Fullhouse"
	    winnerIndex = new[0] + new[1] + new[2] + new[3] + new[4]
	    #print winnerIndex





#Straight rolls possibilites
#there are only 5 die so you need to write it all out... damn it
def bubblesort(dice):
    a = dice
    for i in range(0, len(a) - 1):
	for j in range(0, len(a) - 1 - i):
	    if a[j] > a[j+1]:
	        a[j], a[j+1] = a[j+1], a[j]

    new = bubblesort(dice)
    winner(new)



if __name__ == '__main__':
    main()
