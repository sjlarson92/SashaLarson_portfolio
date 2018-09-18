from flask import Flask

app = Flask(__name__)# this is a object instance of the class Flask

@app.route('/') #/ is the root directory/home page of website
def index():
    return 'This is the homepage'
# / url
#routing/mapping is tying a url to a python function

if __name__ == "__main__":
    app.run(debug = True)# this is calling the run method from teh app object
    #debug = True, runs the debugger that will see small changes in the code while the server is running
