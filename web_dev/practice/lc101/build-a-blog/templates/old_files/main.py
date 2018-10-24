from flask import Flask, request, redirect, render_template
# from flask_sqlalchemy import SQLAlchemy
import mysql.connector

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://sasha:password@localhost:3306/build_a_blog'
#this is the database connection string that links the database to the file
#user:password@host:port_number/database_name

app.config['SQLALCHEMY_ECHO'] = True
#this will help with debugging, it shows code that is going through so we can see where issues are occuring
#this will show the databse commands that python is doing by running SQLAlchemy

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
#this is the new instace of the class SQLALCHEMY which creates a new object that I can actually use

class Blog(db.Model):
#every class that is stored in a database needs an id
    id = db.Column(db.Integer, primary_key=True)
    #this is to define the primary key and the setting the column as an integer
    blog_name = db.Column(db.String(120))
    #this defines the next column to the variable blog_name and makes it a string with a max lenght of 120
    blog_post = db.Column(db.String(120))

    def __init__(self, blog_name, blog_post): # this is a contructor for the class
        self.name = blog_name #takes in the unique data for this
        self.post = blog_post

@app.route('/', methods = ['GET'])
def index():

    # if request.method == 'POST':
    #     blog = request.form['blog']
    #     blogs.append(blog)

    blogs = Blog.query.all()

    # blogs = [['Title 1', 'Post 1'], ['Title 2', 'Post 2']]

    #this gets a list of all the objects in the class Blog and sets it equal to blogs
    return render_template("add_blog.html", title='Build a Blog', blogs=blogs)



if __name__ == "__main__":
    app.run(debug = True)
