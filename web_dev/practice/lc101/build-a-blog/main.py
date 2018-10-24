from flask import Flask, request, redirect, render_template
import MySQLdb

app = Flask(__name__)

my_connection = MySQLdb.connect(host='localhost',
                             database='build_a_blog',
                             user='sasha',
                             password='password')

cursor = my_connection.cursor()



@app.route('/', methods = ['GET'])
def index():

    select_all_statement = "SELECT * FROM blog"

    cursor.execute(select_all_statement)
    data = cursor.fetchall()

    return render_template("add_blog.html", title = 'Build a Blog', blogs = data)



if __name__ == "__main__":
    app.run(debug = True)
