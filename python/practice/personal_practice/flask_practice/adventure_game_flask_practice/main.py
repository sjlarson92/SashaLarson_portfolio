from flask import Flask, render_template, url_for, flash, redirect, request
from forms import RegistrationForm, LoginForm
import text
import re
app = Flask(__name__)# this is a object instance of the class Flask

app.config['SECRET_KEY'] = 'e06jBDDXkS1ZeKTx5RfBOq7YhFoy4CcC'

# players = [
#     {
#         'name': 'Sasha Larson',
#         'chapter': '0',
#         'choice': 'a',
#         'life_status': True
#     },
#     {
#         'name': 'Lucas Costa',
#         'chapter': '0',
#         'choice': 'b',
#         'life_status': False
#     }
#
# ]
@app.route('/')
@app.route('/index')
@app.route('/home') #/ is the root directory/home page of website
def home():
    return render_template("home.html")
# / url
#routing/mapping is tying a url to a python function
@app.route('/instructions')
def instructions():
    return render_template("instructions.html", directions=text.directions, title= " How to Play")

@app.route('/about')
def about():
    return render_template("about.html", about=text.summary, title="About")

@app.route('/register', methods=["GET","POST"])
def register():
    return render_template("register.html")

    #the code below is for the register form with WTF
    # form = RegistrationForm()
    # if form.validate_on_submit():
    #     flash('Account Created', 'success')
    #     return redirect(url_for('home'))
    # return render_template("register.html", title="Register", form=form)

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
                return render_template ('register.html', error2 = error2)

            else:
                print('>>>>>>Passwords do not match:(')
                error3 = "Passwords do not match"

                return render_template('register.html', user = user, error3 = error3)
        else:
            print('>>>>>>There is no match for password:(')
            error2 = "Your password is incorrect"

            return render_template('register.html', user = user, error2 = error2)


    else:
        print('>>>>>>There is no match for user:(')

        if user == "" and password == "" and verify_password == "":
            error1 = "Please input a username"
            error2 = "Please input password"
            error3 = "Please verify password"

            return render_template('register.html', error1 = error1, error2 = error2, error3 = error3)

        elif len(user) < 3 or len(user) > 20:
            error1 = "Username must be between 3 to 20 characters long"

            return render_template ('register.html', error1 = error1)

        elif re.compile(r'\s').match(user):
            error1 = "No spaces allowed in Username"

            return render_template ('register.html', error1 = error1)

        else:
            error1 = "Your username is incorrect"

            return render_template('register.html', user = user, error1 = error1)

    flash('Registration Succesful!','success')
    return redirect('/login')

@app.route('/login', methods=["GET"])
def login():
    user = request.form.get('username')
    password = request.form.get('password')

    return render_template("login.html", user = user, password = password)

@app.route('/login/success', methods=['get','post'])
def login_error():
    log_user = request.form.get('log_username')
    log_password = request.form.get('log_password')
    user = 'sjlarson92'
    password = 'password'

    if log_user == user and log_password == password:
        flash('Login Successful', 'success')
        return render_template('welcome.html', user = user)

    else:
        flash('Login was NOT sucessful', 'danger')
        return redirect('/login')



    # the code below is for the login form with WTF
    # form = LoginForm()
    # if form.validate_on_submit():
    #     if form.email.data == 'admin@gmail.com' and form.password.data == 'password':
    #         flash('You have been logged in', 'success')
    #         return redirect(url_for('home'))
    #     else:
    #         flash('Login Unsuccessful. Please check username and password', 'danger')
    # return render_template("login.html", title="Login", form=form)

@app.route('/play')
def play():
    return render_template("play.html", title="Start Game")

@app.route('/play/createplayer', methods=['POST'])
def createplayer():
    numPlayers = request.form.get('num_players')
    return render_template("create_player.html", title="Create Player", numPlayers = numPlayers)

@app.route('/chapters/0', methods=['post'])
def chapter0():
    player_name = request.form.get('player_name')
    return render_template('chapter0.html', title="Chapter 0", player_name = player_name, chapter = text.ch0,  option1= text.ch0_a, option2= text.ch0_b, question = text.ch0_question)

@app.route('/chapters/1', methods=['POST'])
def chapter1():
    player_choice = request.form.get('player_choice')
    if player_choice == 'A':
        return render_template('chapter1.html', title="Chapter 1", chapter = text.ch1a, player_choice = player_choice, option1= text.ch1a_a, option2= text.ch1a_b, question = text.ch1a_question)
    elif player_choice == 'B':
        return render_template('chapter1.html', title="Chapter 1", chapter = text.ch1b, player_choice = player_choice,  option1= text.ch1b_a, option2= text.ch1b_b, question = text.ch1b_question)
    else:
        return render_template('chapter1.html', title="Chapter 1", chapter = "Error with player choice", player_choice = player_choice)

@app.route('/chapters/2', methods=['POST'])
def chapter2():
    player_choice = request.form.get('player_choice')
    if player_choice == 'A':
        return render_template('chapter2.html', title="Chapter 2", chapter = text.ch2a, player_choice = player_choice, option1= text.ch2a_a, option2= text.ch2a_b, question = text.ch2a_question)
    elif player_choice == 'B':
        return render_template('gameover.html', title="Game Over", message = text.ch2b)
    else:
        return render_template('chapter2.html', title="Chapter 2", chapter = "Error with player choice")

@app.route('/chapters/3', methods=['POST'])
def chapter3():
    player_choice = request.form.get('player_choice')
    if player_choice == 'A':
        return render_template('chapter3.html', title="Chapter 3", chapter = text.ch3a, player_choice = player_choice, option1= text.ch3a_a, option2= text.ch3a_b, question = text.ch3a_question)
    elif player_choice == 'B':
        return render_template('chapter3.html', title="Chapter 3", chapter = text.ch3b, player_choice = player_choice,  option1= text.ch3b_a, option2= text.ch3b_b, question = text.ch3b_question)
    else:
        return render_template('chapter3.html', title="Chapter 3", chapter = "Error with player choice")

@app.route('/chapters/4', methods=['POST'])
def chapter4():
    player_choice = request.form.get('player_choice')
    if player_choice == 'A':
        return render_template('chapter4.html', title="Chapter 4", chapter = text.ch4a, player_choice = player_choice, option1= text.ch4a_a, option2= text.ch4a_b, question = text.ch4a_question)
    elif player_choice == 'B':
        return render_template('chapter4.html', title="Chapter 4", chapter = text.ch4b, player_choice = player_choice,  option1= text.ch4b_a, option2= text.ch4b_b, question = text.ch4b_question)
    else:
        return render_template('chapter4.html', title="Chapter 4", chapter = "Error with player choice")

@app.route('/chapters/5', methods=['POST'])
def chapter5():
    player_choice = request.form.get('player_choice')
    # return render_template('chapter5.html', title="Chapter 5", chapter = text.ch5, player_choice = player_choice, option1= text.ch5a, option2= text.ch5b, question = text.ch5_question)
    return render_template('gameover.html', title="Game Over", message = text.ch5)

if __name__ == "__main__":
    app.run(debug = True)
