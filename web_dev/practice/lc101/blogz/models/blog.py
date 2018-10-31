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
    select_user_id = "SELECT user_id FROM users WHERE username=(%s)"

    select_all_statement = "SELECT * FROM blogs WHERE user_id=(%s)"

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
        blog_id = row[0]
        user_id = row[1]
        title = row[2]
        text = row[3]
        print (">>>> this is data primary key", blog_id)
        post = Blog(blog_id, user_id, title, text)

        blogs_list.append(post)

        # print(">>>>selected blogs: ", blogs)

    return blogs_list

def add_blog(name, post):
    insert_into_statement = "INSERT INTO blogs (blog_name, blog_post) VALUES (%s, %s)"
    val = (name, post)
    print('>>>> these are the values of the parameters: ', val)
    cursor.execute(insert_into_statement, val)
    my_connection.commit() #this commits the added blog to the table in the database, without it the added blogs will disappear after the session ends
