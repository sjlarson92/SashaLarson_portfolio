from flask import Flask, request # request module gives informatin on how the user requested a webpage

app = Flask(__name__)

# 2 different http methods are get and post

# post is often used with forms

@app.route("/")
def index():
    return "Method used: %s" % request.method # this shows the kind of method of the http request

@app.route("/bacon", methods=['GET', 'POST']) #this says that the url page bacon can handle both methods of GET and POST
def bacon():
    if request.method == 'POST': # this if statement check to if the request methond is equal to POST
        return "You are using POST"
    else:
        return "You are probably using GET"


if __name__ == "__main__":
    app.run()
