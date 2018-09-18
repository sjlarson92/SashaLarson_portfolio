from flask import Flask, render_template #importing render_template allows us to use these templates/layouts

app = Flask(__name__)

@app.route("/profile/<name>")
def profile(name):
    return render_template("profile.html", name=name) #this function says that whenever you go to the url /profile/<name> go to the templates forlder and find the profile.html

    # rule of thumb is to never put HTML directly in return method

if __name__ == "__main__":
    app.run()

# HTML files go in the templates folder
