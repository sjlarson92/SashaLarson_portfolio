from flask import Blueprint, render_template, request, redirect, url_for, flash
from src import app

game = Blueprint('game', __name__)

title='ADVENTURE GAME'

@game.route('/start', methods=['POST'])
def start():
    
    print ('>>> This is the game controller')
    return render_template('/Game/ch1.html', title=title)
