from flask import Flask, request, redirect, render_template, url_for, flash, session
import re
import models.users
import models.blog

mb = models.blog
mu = models.users

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
models.users.User

title = 'Blogz'
#test user in db sasha password

@app.before_request # this will run before every request to check if user is logged in
def requireLogin():
    print('--- VALIDATING IF USER IS LOGGER IN ---')
    allowed_routes = ['login', 'signup', 'loginAttempt', 'blogsByUsername', 'index'] #list of allowed routes user can access without being logged in
    if request.endpoint not in allowed_routes and 'user' not in session: # makes user log in if trying to go to a route not listed in allowed routes and will redirect them to login
        return redirect('/login')


@app.route('/')
def index():
    return render_template('index.html', title=title)

@app.route('/login', methods=["GET"])
def login():

    return render_template("login.html")

@app.route('/login/attempt', methods=['post'])
def loginAttempt():
    log_user = request.form.get('log_username')
    log_password = request.form.get('log_password')
    response, error = mu.userLoginValidation(log_user, log_password)
    print('>>>> This is the repsonse from Login Validation', response)
    if response == False:
        print('>>> The repsonse is False')
        flash(error, 'danger')
        return render_template('login.html', error=error)
    else:
        print('>>> The response is True!')
        session['user'] = log_user
        print('session user' ,session['user'])
        blogs = mb.get_blogs(log_user)
        print('>>> This is the login attempt to get blogs from user')
        flash('Successfuly Logged In', 'success')
        return render_template('user_all_blogs.html', username=log_user, blogs=blogs)
        #return redirect(url_for('blogsByUsername', username=log_user), blogs=blogs)

@app.route('/signup', methods=['GET','POST'])
def signup():
    return render_template('signup.html', title='Sign Up')

# @app.route('/register/error', methods=['post'])
# def register_error():

@app.route('/singleblog/', methods = ['GET'])
def blog():
    blog_id = str(request.args.get('blog_id'))
    print('This is the blog id: ', blog_id)

    name, post = mb.get_single_blog(blog_id)
    return render_template("single_blog.html", title = 'Build a Blog', name = name, post = post)

@app.route('/blogs/')
def blogs():
    print('(IN BLOG) session user' ,session['user'])
    username = str(request.args.get('username'))
    print('>>> username in blog: %s' % username)

    blogs = mb.get_blogs(username)
    print('>>> Sending user_all_blogs.html template')
    return render_template('user_all_blogs.html', username=username, blogs=blogs)

@app.route('/blogs/all')
def allBlogs():
    blogs = mb.get_all_blogs()
    return render_template('all_blogs.html', blogs=blogs)

@app.route('/blogs/<username>', methods = ['POST', 'GET'])
def blogsByUsername(username):
    print('>>> this is the blogsByUsername function')
    if request.method == 'POST':
        user = request.form.get('username')
        password = request.form.get('password')
        verify_password = request.form.get('verify_password')
        email = request.form.get('email')

        user_obj = mu.User(user,password, verify_password, email)

        response, username_error, password_error, email_error  = mu.userValidation(user_obj)

        if response == False:
            return render_template('signup.html', error1=username_error, error2=password_error, error3=email_error, user=user)
        else:
            user = request.form.get('username')
            mu.addUserToDatabase(user_obj)
            session['user'] = user #this saves the user as logged in
            #flash('User Sucessfully Created', 'Sucess')
            blogs = mb.get_blogs(user)
            return render_template('user_all_blogs.html', username=username, blogs=blogs)
            #return 'yay! sucess! This part of the website is under construction :D'
    elif request.method == 'GET':
        user = request.form.get('username')
        blogs = mb.get_blogs(user)
        print('>>> This is the beginning of the blogsByUsername GET method')
        return render_template('user_all_blogs.html', username=user, blogs=blogs)

@app.route('/addblog', methods=['GET', 'POST'])
def addBlog():
    if request.method == 'GET':
        print('>>> this is the add blog get method')
        return render_template('add_blog.html')
    elif request.method == 'POST':
        print('>>> this is the add blog post method')

        print('(IN ADD BLOG) session user' ,session['user'])
        username = session['user']
        print('session username is: ', username)

        blogname = request.form.get('blog_name')
        print('>>> blogname is: ', blogname)

        blogpost = request.form.get('blog_post')
        print('>>> blogpost is: ', blogpost)

        response = mb.add_blog(blogname, blogpost, username)
        if response == True:
            print('>>>you have succesffuly added your new blog')
            flash('Blog added successfuly', 'success')
            return redirect('/')
        else:
            flash('Blog failed to add', 'danger')
            return('Attempt to add new blog failed')
@app.route('/logout')
def logout():
    del session['user']
    flash('Succesffuly Logged out, Goodbye!', 'success')
    return redirect('/')

if __name__ == "__main__":
    app.run(debug = True)
