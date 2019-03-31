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
        if ch in ('1None', '3b', '8b', '11a', '11b'):
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
