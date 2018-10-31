import MySQLdb
import re
from flask import render_template

# DB connection
my_connection = MySQLdb.connect(host='localhost',
                             database='blogz',
                             user='sasha',
                             password='password')
cursor = my_connection.cursor()

class Blog:
    def __init__(self, blog_id, user_id, name, post):
        # print("this is init function in example class")
        self.blog_id = blog_id
        self.user_id = user_id
        self.name = name
        self.post = post

    def get_name(self):
        return self.name

    def get_blog_id(self):
        return self.blog_id

    def get_user_id(self):
        return self.user_id

    def get_post(self):
        return self.post

def get_blogs(username):
    username = username
    print('this is the username: ', username)
    select_all_statement = "SELECT * FROM blogs WHERE user_id=(%s)"

    select_user_id = "SELECT user_id FROM users WHERE username=(%s)"
    #print('>>> this is the user object: ', user)
    cursor.execute(select_user_id, [username])
    result = cursor.fetchone()
    print('>>> this is the result of user id: ', result[0])

    user_id = str(result[0])
    cursor.execute(select_all_statement, [user_id])
    data = cursor.fetchall()

    print('>>>> this is the result of data', data)
    #print('>>>> this is the data[0]:', data[0])
    blogs_list = []

    for row in data:
        id = row[0]
        title = row[1]
        text = row[2]
        print (">>>> this is data primary key", id)
        post = Blog(id, title, text)

        blogs_list.append(post)

        # print(">>>>selected blogs: ", blogs)

    return blogs_list
