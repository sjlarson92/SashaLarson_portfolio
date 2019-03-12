import MySQLdb
import re
from flask import render_template

SECRET_KEY = '_5#y2L"F4Q8z\n\xec]/'

#this should contain the database connection string

#DB connection
my_connection = MySQLdb.connect(host='localhost',
                             database='advgame',
                             user='sasha',
                             password='password')
cursor = my_connection.cursor()
