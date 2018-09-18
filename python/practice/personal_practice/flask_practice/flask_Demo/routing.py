from flask import Flask

app = Flask(__name__)

# routing is a way to make multiple webpages for your app

# @ signifies a decorator - way to wrap a function and modifying its behavior

@app.route('/') # this is a decorator
# in flask we use a decorator to route a url to a return value of a function
def index():
    return 'This is the homepage'


@app.route('/tuna')
def tuna():
    return '<h2> Tuna is good </h2>' #you can write HTML in a return value

@app.route('/profile/<username>') #put variable for url in <>
def profile(username): #pass in variable as a parameter
    return "Hey there %s" % username

@app.route('/post/<int:post_id>') #when variable is not a string you must indicate type
def show_post(post_id): #pass in variable as a parameter
    return " Post ID is %s" % post_id


if __name__ == "__main__":
    app.run(debug = True)
