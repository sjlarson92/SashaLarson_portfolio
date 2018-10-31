import MySQLdb
import re
from flask import render_template

# DB connection
my_connection = MySQLdb.connect(host='localhost',
                             database='blogz',
                             user='sasha',
                             password='password')
cursor = my_connection.cursor()

class User:
    def __init__(self, username, password, verify_password, email):
        # print("this is init function in example class")
        self.user_id = 0
        self.username = username
        self.password = password
        self.verify_password = verify_password
        self.email = email

    def get_username(self):
        return self.username

    def get_user_id(self):
        return self.user_id

    def get_password(self):
        return self.password

def addUserToDatabase(user):
    try:
        insert_into_statement = "INSERT INTO users (username, password, email) VALUES (%s, %s, %s)"
        val = (user.username, user.password, user.email)
        print('>>>> these are the values of the parameters: ', val)
        cursor.execute(insert_into_statement, val)
        my_connection.commit()
    except:
        return("Attempt to add user to database failed")
def userValidation(user):

    def checkIfUserExists(username):
        # check if user exists, if he does, we should return an error
        print('>>> Checking if user exists')
        sql_select_user = "SELECT * FROM users WHERE username=(%s)"
        data = cursor.execute(sql_select_user, [username])
        #data = cursor.fetchall()

        print('>>> Data returned from DB: ', data)

        if data != 0: # if there's at least one person with that username
            print(">>> There's someone in the DB wit this name: ", username )
            return False
        else:
            print(">>> There's no on in the DB with this username:", username)
            return True

    def checkIfBlank(attribute):
        pattern = re.compile('^(\s|\S)*(\S)+(\s|\S)*$')
        if pattern.match(attribute):
            return True
        else:
            return False


    def usernameValidation(username):
        # check if username only letter and numbers and has a length of 3-20
        if not checkIfBlank(username):
            return False, 'Username is empty'
        else:
            pattern = re.compile(r'^[a-zA-Z0-9]{3,20}$')
            if pattern.match(username):
                print('>>> username meets the match criteria')
                return True, ''
            else:
                print('>>> username DOES NOT meet the match criteria')
                return False, 'Username must be within 3 - 20 characters and not have any spaces'


    def passwordValidation(password, password2):
        # check if username only letter and numbers and has a length of 3-20
        if not checkIfBlank(password):
            print('>> Password is empty')
            return False, 'Password is empty'
        else:
            if not checkIfBlank(password2):
                print('>> Password2 is empty')
                return False, 'Password Validation is empty'
            else:
                pattern = re.compile(r'^[a-zA-Z0-9]{3,20}$')
                if pattern.match(password):
                    print('>>> password meets the match criteria')
                    if password == password2:
                        return True, ''
                    else:
                        print('>>>> Passwords do not match')
                        return False, 'Passwords do not match'
                else:
                    print('>>> password DOES NOT meet the match criteria')
                    return False, 'Password must be within 3 - 20 characters and not have any spaces'

    def emailValidation(email):
        # check if username only letter and numbers and has a length of 3-20
        if not checkIfBlank(email):
            print('>> Email is empty')
            return False, 'Email is empty'
        else:
            pattern = re.compile(r'^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')
            if pattern.match(email):
                print('>>> email meets the match criteria')
                return True, ''
            else:
                print('>>> email DOES NOT meet the match criteria')
                return False, 'Email must be within 3 - 20 characters and not have any spaces'


    # START HERE!
    response = checkIfUserExists(user.username) # checking if user already exists
    print('>>> 1st Response is: ', response)
    if response == False:
        error = 'Username already exists'
        return False, error, '', ''
    elif response == True:
        print('>>>>>>>> STARTING USER INPUT VALIDATION >>>>>>>')
        username_response, username_error = usernameValidation(user.username)
        password_response, password_error = passwordValidation(user.password, user.verify_password)
        email_response, email_error = emailValidation(user.email)

        if username_response == True and password_response == True and email_response == True:
            return True, 'Success', 'Success', 'Success'
        else:
            return False, username_error, password_error, email_error

def userLoginValidation(log_user, log_password):
    log_user = log_user
    log_password = log_password
    def checkIfUserExists(username):
        # check if user exists, if he does, we should return an error
        print('>>> Checking if user exists')
        sql_select_user = "SELECT * FROM users WHERE username=(%s)"
        data = cursor.execute(sql_select_user, [username])
        #data = cursor.fetchall()

        print('>>> Data returned from DB: ', data)

        if data != 0: # if there's at least one person with that username
            print(">>> There's someone in the DB wit this name: ", username )
            return True
        else:
            print(">>> There's no on in the DB with this username:", username)
            return False

    def checkUserPassword(log_user, log_password):
        print('>>> Checking if password matches password in DB')
        sql_select_password = "SELECT password FROM users where username=(%s)"
        data = cursor.execute(sql_select_password, [log_user])
        data = cursor.fetchone()
        print('>>> Data returned from DB for password: ', data[0])
        password = data[0]
        if password == log_password:
            print('>>> Passwords match!')
            return True
        else:
            print('>>> Passwords do not match')
            return False

    # START HERE!
    response = checkIfUserExists(log_user) # checking if user already exists
    print('>>> 1st Response is: ', response)
    if response == False:
        print('>>> This username does not exist: ', log_user)
        return False, 'Invalid Login please try again '
    elif response == True:
        print('>>> This username does exist: ', log_user)
        response = checkUserPassword(log_user, log_password)
        if response == False:
            print('>>> The password is not correct', log_password)
            return False, 'Invalid Login please try again'
        elif response == True:
            print('>>> The password is correct', log_password)
            return True, ''
        #return True, ''



        # print('>>>>>>>> STARTING USER INPUT VALIDATION >>>>>>>')
        # username_response, username_error = usernameValidation(user.username)
        # password_response, password_error = passwordValidation(user.password, user.verify_password)
        # email_response, email_error = emailValidation(user.email)
        #
        # if username_response == True and password_response == True and email_response == True:
        #     return True, 'Success', 'Success', 'Success'
        # else:
        #     return False, username_error, password_error, email_error


        # if log_user == user and log_password == password:
        #     flash('Login Successful', 'success') #flash does not work for some reason
        #     return render_template('welcome.html', user = user)
        #
        # else:
        #     flash('Login was NOT sucessful', 'danger')
        #     return redirect('/login')
