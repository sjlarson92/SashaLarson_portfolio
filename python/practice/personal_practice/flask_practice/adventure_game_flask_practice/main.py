from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm
import text

app = Flask(__name__)# this is a object instance of the class Flask

app.config['SECRET_KEY'] = 'e06jBDDXkS1ZeKTx5RfBOq7YhFoy4CcC'

players = [
    {
        'name': 'Sasha Larson',
        'chapter': '0',
        'choice': 'a',
        'life_status': True
    },
    {
        'name': 'Lucas Costa',
        'chapter': '0',
        'choice': 'b',
        'life_status': False
    }

]
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

@app.route('/play')
def play():
    return render_template("game.html", players=players, title="Start Game")

@app.route('/register', methods=["GET","POST"])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash('Account Created', 'success')
        return redirect(url_for('home'))
    return render_template("register.html", title="Register", form=form)

@app.route('/login', methods=["GET","POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@gmail.com' and form.password.data == 'password':
            flash('You have been logged in', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template("login.html", title="Login", form=form)


if __name__ == "__main__":
    app.run(debug = True)
