import MySQLdb
import re
from flask import render_template

# DB connection
my_connection = MySQLdb.connect(host='localhost',
                             database='advgame',
                             user='sasha',
                             password='password')
cursor = my_connection.cursor()

class User:
    def __init__(self, playerName):
        # print("this is init function in example class")
        self.id = 0
        self.playerName = playerName
        self.choice = ''
        self.dead = False
        self.chapter = 1

    def get_playername(self):
        return self.playerName

    def get_userid(self):
        return self.id

    def get_playerstatus(self):
        return self.dead

    def get_current_chapter(self):
        return self.chapter

    def get_choice(self):
        return self.choice

def updatePlayerChandChoice(name, choice, chNum):
    try:
        print('>>> This is inside the updatePlayerChandChoice function')

        chNum = chNum + 1
        print('>>> The new chNum is: ', chNum)

        updateChandChoiceNumDataQuery = "UPDATE players SET chapter = (\'%d\'), choice = (\'%s\') WHERE playerName = (\'%s\')" % (chNum, choice, name)

        print('>>> updateChandChoiceNumDataQuery is: ', updateChandChoiceNumDataQuery)

        cursor.execute(updateChandChoiceNumDataQuery)
        my_connection.commit()

    except:
        return('Attempt to update player chapter and choice failed')

def rotatePlayerList(name, list):
    try:
        print('>>> This is the rotatePlayerList function')
        print('>>> the incoming list is: ', list)

        list.remove(name)

        list.append(name)

        print('updated list from rotatePlayerList function is: ', list)

        return list

    except:
        return('Attempt to update playerList failed')

def killPlayer(name):
    try:
        print('>>>this is the killPlayer function')
        updatePlayerDataQuery = "UPDATE players SET dead = True WHERE playerName = (\'%s\')" % (name)
        print('>>> updatePlayerDataQuery is: ', updatePlayerDataQuery)

        cursor.execute(updatePlayerDataQuery)
        my_connection.commit()

    except:
        return('Attempt to update player status failed')

def didPlayerDie(ch):
    try:
        if ch in ('5B', '7B', '8A', '9A', '10A', '11A', '11B'):
            print('player is dead')
            return True
        else:
            print('Player is not dead')
            return False
    except:
        return('Attempt to check player status failed')

def getChapterNumber(player_name):
    try:
        chapterNumberDataQuery = "SELECT chapter from players WHERE playerName = (\'%s\')" % (player_name)

        cursor.execute(chapterNumberDataQuery)
        result = cursor.fetchone()

        chNum = result[0]

        return chNum
    except:
        return('Attempt to retrieve chNum failed')

def getChapterText(player_name):
    try:
        print('>>> this is inside the getChapterText try block')

        chapterDataQuery = "SELECT chapter, choice from players WHERE playerName = (\'%s\')" % (player_name)

        print('>>> chapterDataQuery: ', chapterDataQuery)

        cursor.execute(chapterDataQuery)
        result = cursor.fetchone()

        chNum = result[0]
        choice = result[1]
        print('>>>> chNum from the data query is: ', chNum)
        print('>>> choice from data query is', choice)

        ch = (str(chNum)+str(choice))
        print('>>> ch is: ', ch)

        return ch

    except:
        return('Attempt to retrieve ch from database failed')


def getPlayerByName(player_name):
    try:
        print('>>> this is inside the try block')
        playerDataQuery = "SELECT playerName, dead, choice, chapter from players WHERE playerName = (\'%s\')" % (player_name)

        print('>>>>playerDataQuery: ', playerDataQuery )

        cursor.execute(playerDataQuery)

        player = cursor.fetchone()
        #this retrieves actual data from db

        print('>>>>player from data query is: ', player)

        print('>>>> player name from data query is: ', player[0])

        return player
    except:
        return("Attempt to get player by player_name from database failed")

def addPlayerNameToDatabase(player):
    try:
        insert_into_statement = "INSERT INTO players (playerName) VALUES (\'%s\')" % (player.playerName)

        print("insert_into_statement: ", insert_into_statement)
        cursor.execute(insert_into_statement)
        my_connection.commit()
    except:
        return("Attempt to add playerName to database failed")

############### validation

def validatePlayerNames(playerList):
    try:
        #compare each player to other Names
        #if all are unique compare to names in db
        #else returm error
        print("This is the validatePlayerNames function")
        firstTest = comparePlayerNames(playerList)

        if firstTest:
            print(">>> This runs if all names are unique to secondTest")

            secondTest = checkDBforPlayerName(playerList)

            if secondTest:
                print(">>> The secondTest returned True")
                return True, ''
            else:
                print(">>> The secondTest returned False")
                error = "There is already a previous player with that name please choose a different one"
                return False, error

        else:
            print(">>>There is a duplicate in the playerList")
            error = "Player names cannot be the same as another players. Please enter unique player names"
            return False, error
            #return error
    except:
        return("Attempt to validate player names failed")

def comparePlayerNames(playerList):
    try:
        testPlayerList = set(playerList)
        print(">>>>This is the testPlayerList: ", testPlayerList)

        if len(testPlayerList) == len(playerList):
            print(">>>List is unique")

            return True
        else:
            print(">>>>There is a duplicate in this list")
            return False
    except:
        return("Attempt to compare player names in player list failed")

def checkDBforPlayerName(playerList):
    try:
        print(">>> This is the second validation test")

        responseList = []

        for playerName in playerList:
            selectPlayerNamesStatement = "SELECT playerName FROM players WHERE playerName = (\'%s\')" % (playerName)

            print("This is the selectPlayerNamesStatement: ", selectPlayerNamesStatement)

            cursor.execute(selectPlayerNamesStatement)
            response = cursor.fetchall()
            responseList.append(response)

        print(">>> This is the responsse from the DB for the selectPlayerNamesStatement: ", responseList)

        if not response:
            print(">>> The return list from the DB is empty")

            return True

        else:
            print(">>> The return list is not empty")

            return False

    except:
        return("Attempt to check DB for playerName failed")
