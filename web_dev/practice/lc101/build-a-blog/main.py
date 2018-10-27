from flask import Flask, request, redirect, render_template, url_for, flash
import MySQLdb
from models.blog import Blog

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

my_connection = MySQLdb.connect(host='localhost',
                             database='build_a_blog',
                             user='sasha',
                             password='password')

cursor = my_connection.cursor()

def get_blogs():
    select_all_statement = "SELECT * FROM blog"

    cursor.execute(select_all_statement)
    data = cursor.fetchall()

    print('>>>> this is the result of data', data)
    #print('>>>> this is the data[0]:', data[0])
    blogs = []

    for row in data:
        id = row[0]
        title = row[1]
        text = row[2]
        print (">>>> this is data primary key", id)
        post = Blog(id, title, text)

        blogs.append(post)

        # print(">>>>selected blogs: ", blogs)

    return blogs

def add_blog(name, post):
    insert_into_statement = "INSERT INTO blog (blog_name, blog_post) VALUES (%s, %s)"
    val = (name, post)
    print('>>>> these are the values of the parameters: ', val)
    cursor.execute(insert_into_statement, val)
    my_connection.commit() #this commits the added blog to the table in the database, without it the added blogs will disappear after the session ends

@app.route('/')
def home():
    return ("This is the Homepage")

@app.route('/blog', methods = ['GET'])
def blog():
    # blogs = get_blogs()
    select_blog = "SELECT * FROM blog WHERE id=(%s)"
    # print('this is the variable id:', request.args.get('id'))
    key = request.args.get('id')
    cursor.execute(select_blog, key)
    blog = cursor.fetchall()
    print('>>>>this is the blog variable:', blog)
    name = blog[0][1]
    post = blog[0][2]
    print('>>>> this is the name variable: ', name)
    return render_template("single_blog.html", title = 'Build a Blog', name = name, post = post)

@app.route('/newpost', methods = ['GET', 'POST'])
def index():

    if request.method == 'POST':
        name = request.form.get('blog_name')
        print('>>>>> blog name: ', name)
        post = request.form.get('blog_post')
        if name == "" or post == "":
            print(">>>>this message is before the flash message")
            error = "Please complete form to add a blog post"
            #flash('Please complete form to add a blog post')
            return render_template('add_blog.html', error=error)
        else:
            add_blog(name, post)#call function to add blog
            return redirect(url_for('blog'))

    if request.method == 'GET':
        return render_template("add_blog.html", title = 'Build a Blog')
    #research ORM and create class and be able to reflect data by property name

@app.route('/allBlogs', methods = ['GET'])
def allBlogs():
    blogs = get_blogs()
    # print(">>>>This is the data printed out:", blogs)
    return render_template("all_blogs.html", title = 'Build a Blog', blogs = blogs)


if __name__ == "__main__":
    app.run(debug = True)
