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
    return render_template("register2.html")
    
    #the code below is for the register form with WTF
    # form = RegistrationForm()
    # if form.validate_on_submit():
    #     flash('Account Created', 'success')
    #     return redirect(url_for('home'))
    # return render_template("register.html", title="Register", form=form)

@app.route('/login', methods=["GET","POST"])
def login():
    return render_template("login2.html")


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
    return render_template('chapter5.html', title="Chapter 5", chapter = text.ch5, player_choice = player_choice, option1= text.ch5a, option2= text.ch5b, question = text.ch5_question)

if __name__ == "__main__":
    app.run(debug = True)
