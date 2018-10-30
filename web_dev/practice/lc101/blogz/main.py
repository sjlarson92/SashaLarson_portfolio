from flask import Flask, request, redirect, render_template, url_for, flash
import re
from models.blog import Blog
import models.users

mu = models.users

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
models.users.User

title = 'Blogz'
#test user in db sasha password

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

    user_obj = mu.User(user,password, verify_password, email)

    response, username_error, password_error, email_error  = mu.userValidation(user_obj)

    if response == False:
        return render_template('signup.html', error1=username_error, error2=password_error, error3=email_error)

    return 'yay! sucess! This part of the website is under construction :D'

@app.route('/login', methods=["GET"])
def login():

    return render_template("login.html")

@app.route('/login/success', methods=['get','post'])
def login_error():
    log_user = request.form.get('log_username')
    log_password = request.form.get('log_password')
    user = 'sjlarson92'
    password = 'password'

    if log_user == user and log_password == password:
        flash('Login Successful', 'success') #flash does not work for some reason
        return render_template('welcome.html', user = user)

    else:
        flash('Login was NOT sucessful', 'danger')
        return redirect('/login')

if __name__ == "__main__":
    app.run(debug = True)
