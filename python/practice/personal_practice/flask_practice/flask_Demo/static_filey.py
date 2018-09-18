from flask import Flask, render_template
app = Flask(__name__)

@app.route("/profile/<name>")
def profile(name):
    return render_template("profile.html", name=name)

if __name__ == "__main__":
    app.run()


#CSS goes in the static directory since it does not change
