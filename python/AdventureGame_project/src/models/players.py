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
