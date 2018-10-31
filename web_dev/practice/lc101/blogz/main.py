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

@app.route('/login', methods=["GET"])
def login():

    return render_template("login.html")

@app.route('/login/attempt', methods=['post'])
def loginAttempt():
    log_user = request.form.get('log_username')
    log_password = request.form.get('log_password')
    response, error = mu.userLoginValidation(log_user, log_password)
    print('>>>> This is the repsonse from Login Validation', response)
    if response == False:
        print('>>> The repsonse is False')
        return render_template('login.html', error=error)
    else:
        print('>>> The response is True!')
        return redirect(url_for('blogsByUsername', username=log_user))

@app.route('/signup', methods=['GET','POST'])
def signup():
    return render_template('signup.html', title='Sign Up')

# @app.route('/register/error', methods=['post'])
# def register_error():


@app.route('/blogs/<username>', methods = ['POST', 'GET'])
def blogsByUsername(username):
    print('>>> this is the blogsByUsername function')
    if request.method == 'POST':
        user = request.form.get('username')
        password = request.form.get('password')
        verify_password = request.form.get('verify_password')
        email = request.form.get('email')

        user_obj = mu.User(user,password, verify_password, email)

        response, username_error, password_error, email_error  = mu.userValidation(user_obj)

        if response == False:
            return render_template('signup.html', error1=username_error, error2=password_error, error3=email_error, user=user)
        else:
            mu.addUserToDatabase(user_obj)
            flash('User Sucessfully Created', 'Sucess')
            return render_template('user_all_blogs.html', username=username)
            #return 'yay! sucess! This part of the website is under construction :D'
    elif request.method == 'GET':
        print('>>> This is the beginning of the blogsByUsername GET method')
        return render_template('user_all_blogs.html', username=username)


if __name__ == "__main__":
    app.run(debug = True)
