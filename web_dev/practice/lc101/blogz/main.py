from flask import Flask, request, redirect, render_template, url_for, flash
import MySQLdb
import re
from models.blog import Blog

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

my_connection = MySQLdb.connect(host='localhost',
                             database='blogz',
                             user='sasha',
                             password='password')

cursor = my_connection.cursor()


if __name__ == "__main__":
    app.run(debug = True)
