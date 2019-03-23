# class Player(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(20), unique=True, nullable=False)
#     choice = db.Column(db.Boolean, )

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
        insert_into_statement = "INSERT INTO players (playerName) VALUES (%s)"

        val = name.playerName
        print('>>> this is the players name passing to the db: ', val)

        cursor.execute(insert_into_statement, val)
        my_connection.commit()
    except:
        return("Attempt to add playerName to database failed")
