from flask import Flask, render_template

app= Flask(__name__)

#this is to map two different urls to the same function . where the content will change depending on an external variable
@app.route("/")
@app.route("/<user>")
def index(user=None): #this set a default value of None to the user variable and allows the functionto run whether or not there is a user variable
    return render_template("user.html", user=user)


if __name__ == "__main__":
    app.run()
