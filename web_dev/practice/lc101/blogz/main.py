from flask import Flask, request, redirect, render_template, url_for, flash
import MySQLdb
import re
from models.blog import Blog
from models.users import User

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

my_connection = MySQLdb.connect(host='localhost',
                             database='blogz',
                             user='sasha',
                             password='password')

cursor = my_connection.cursor()

title = 'Blogz'

@app.route('/')
def index():
    return render_template('index.html', title=title)

@app.route('/signup', methods=['GET','POST'])
def signup():
    return render_template('signup.html', title='Sign Up')

@app.route('/register/error', methods=['post'])
def register_error():
    user = request.form.get('username')
    password = request.form.get('password')
    verify_password = request.form.get('verify_password')
    email = request.form.get('email')

    pattern = re.compile(r'^[a-zA-Z0-9]{3,20}$')
    if pattern.match(user):
        print('>>>>>There is a match for user!!!!!')

        password_pattern = re.compile(r'^.{3,20}$')
        if password_pattern.match(password):
            print('>>>>>There is a match for password!!!!!')

            if password == verify_password:
                print('>>>>>>The passwords match')

                if email == "":

                    return redirect('/login', user = user)

            elif re.compile(r'\s').match(password):
                error2 = "No spaces allowed in Password"

                flash(error2, category='error')
                return render_template ('signup.html', error2 = error2)

            else:
                print('>>>>>>Passwords do not match:(')
                error3 = "Passwords do not match"

                return render_template('signup.html', user = user, error3 = error3)
        else:
            print('>>>>>>There is no match for password:(')
            error2 = "Your password is incorrect"

            return render_template('signup.html', user = user, error2 = error2)


    else:
        print('>>>>>>There is no match for user:(')

        if user == "" and password == "" and verify_password == "":
            error1 = "Please input a username"
            error2 = "Please input password"
            error3 = "Please verify password"

            return render_template('signup.html', error1 = error1, error2 = error2, error3 = error3)

        elif len(user) < 3 or len(user) > 20:
            error1 = "Username must be between 3 to 20 characters long"

            return render_template ('signup.html', error1 = error1)

        elif re.compile(r'\s').match(user):
            error1 = "No spaces allowed in Username"

            return render_template ('signup.html', error1 = error1)

        else:
            error1 = "Your username is incorrect"

            return render_template('signup.html', user = user, error1 = error1)

    flash('Registration Succesful!','success')
    return redirect('/login')

@app.route('/login', methods=["GET"])
def login():
    # user = request.form.get('username')
    # password = request.form.get('password')

    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug = True)
