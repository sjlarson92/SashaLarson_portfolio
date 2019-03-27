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

def addPlayerNameToDatabase(name):
    try:
        insert_into_statement = "INSERT INTO players (playerName) VALUES (\'%s\')" % (name.playerName)

        print("insert_into_statement: ", insert_into_statement)
        cursor.execute(insert_into_statement)
        my_connection.commit()
    except:
        return("Attempt to add playerName to database failed")

# def getPlayerNamebyID(player_id):
#     try:
#         where_id_equals_statement = "SELECT playerName, dead, choice, chapter from players WHERE ID = (\'%d\')"
#
#         player_obj = where_id_equals_statement % (player_id)
#
#         print('>>>>player name is : ', player_obj.playerName)
#
#         print('>>>>where_id_equals_statement: ', where_id_equals_statement )
#
#         return player_obj
#     except:
#         return("Attempt to get player by ID from database failed")
