welcomeLog =  """
    Welcome to our Yahtzee game!
    This is our project for HackFSU, 2017
    Our team is made up of Lucas Costa, Sasha Larson and Devesh Waingakar"""
print welcomeLog

class setUp(object):
    def playersCount(self):  #ask how many players there are, get their names

        numberOfPlayers = int(raw_input("\nPlease enter how many players there are: "))
        playerNames = []

        print "That's awesome! Let's get everyone's names..."
        for names in range(0, numberOfPlayers):
            nameInput = raw_input("Player %s, please enter your name: " % (names + 1))
            playerNames.append(nameInput)

        print "Great! Here are all the players: "
        for index, name in enumerate(playerNames):
            print "%s: %s" % (index, name)
        print "Good luck to the %s of you!" % numberOfPlayers
        return playerNames

    def gameStart(playerNames):
        a = playersCount

        print a
        # for name in enumerate(playersCount(playerNames)):
        #     print "%s: you may begin" % name
        print "Player" #tell him he can start. call by name


gameMain = setUp()
gameMain.playersCount()
gameMain.gameStart()
