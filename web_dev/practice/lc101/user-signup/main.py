from flask import Flask, render_template, url_for, flash, redirect, request
import re

app = Flask(__name__)
app.config['SECRET_KEY'] = 'password'

@app.route('/')
def index():
    return render_template("layout.html")

@app.route('/signup', methods=['POST'])
def signup():
    user = request.form.get('user_name')
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

                    return render_template('welcome.html', user = user)

                # else:
                #
                #     if re.compile(r'^[@.]{2}+$').match(email):
                #
                #         return render_template('welcome.html', user = user)

                    # else:
                    #     error4 = "Email can only have one instance of @/."
                    #
                    #     return render_template('layout.html', user = user, error4 = error4)


            elif re.compile(r'\s').match(password):
                error2 = "No spaces allowed in Password"

                return render_template ('layout.html', error2 = error2)

            else:
                print('>>>>>>Passwords do not match:(')
                error3 = "Passwords do not match"

                return render_template('layout.html', user = user, error3 = error3)
        else:
            print('>>>>>>There is no match for password:(')
            error2 = "Your password is incorrect"

            return render_template('layout.html', user = user, error2 = error2)


    else:
        print('>>>>>>There is no match for user:(')

        if user == "" and password == "" and verify_password == "":
            error1 = "Please input a username"
            error2 = "Please input password"
            error3 = "Please verify password"

            return render_template('layout.html', error1 = error1, error2 = error2, error3 = error3)

        elif len(user) < 3 or len(user) > 20:
            error1 = "Username must be between 3 to 20 characters long"

            return render_template ('layout.html', error1 = error1)

        elif re.compile(r'\s').match(user):
            error1 = "No spaces allowed in Username"

            return render_template ('layout.html', error1 = error1)

        else:
            error1 = "Your username is incorrect"

            return render_template('layout.html', user = user, error1 = error1)



    # print("This is the user_pattern object: ", user_pattern)
    # user_matches = user_pattern.finditer(user)
    #
    # for match in user_matches:
    #     print("There is a match for the user_matches object", match)


    # if password != verify_password:
    #     flash('passwords do not match!')
    #
    # elif password == verify_password:
    #
    #     return render_template("welcome.html", user=user)
    # elif password != verify_password:
    #     return render_template()

    return render_template("welcome.html", user = user, password = password, verify_password = verify_password, email = email)

# @app.route('/login', methods=['POST'])
# def do_admin_login():
#     if request.form['password'] == 'password' and request.form['username'] == 'admin':
#         session['logged_in'] = True
#     else:
#         flash('wrong password!')
#     return home()


if __name__ == "__main__":
    app.run(debug = True)
