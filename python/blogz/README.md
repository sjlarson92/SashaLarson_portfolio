# Blogz
<!-- Project BIO -->
Blogz is a standard web application that is meant to allow users to sign up to the application and create blog posts that are posted and shared on the app.

This app was made in roughly 2 months, I did this project as an assignment by LaunchCode a non-profit organization that provides free coding lessons to the community.

This application displays some of my skills with:

- Python
- Flask Web Framework
- Pipenv
- MySQL


<!-- Screenshots -->
<div align="center">

### HOME PAGE
<img src= "/python/blogz/img/homePage.png" width= 60% length= 60%>

### SIGN UP
<img src= "/python/blogz/img/signUp.png" width= 60% length= 60%>

### WELCOME NEW USER
<img src= "/python/blogz/img/newUserWelcome.png" width= 60% length= 60%>

### ALL BLOGS LIST
<img src= "/python/blogz/img/allBlogsList.png" width= 60% length= 60%>

### ADD NEW BLOG
<img src= "/python/blogz/img/addNewBlog.png" width= 60% length= 60%>

### NEW BLOG
<img src= "/python/blogz/img/blogAdded.png" width= 60% length= 60%>

### BLOG LIST WITH NEW BLOG
<img src= "/python/blogz/img/blogListwithNewBlog.png" width= 60% length= 60%>

### LOGOUT
<img src= "/python/blogz/img/logout.png" width= 60% length= 60%>

### LOGIN
<img src= "/python/blogz/img/login.png" width= 60% length= 60%>

### LOGIN SUCCESSFUL
<img src= "/python/blogz/img/loginSuccessful.png" width= 60% length= 60%>

</div>
<!-- Code explanation -->
For blogz I used the Flask framework to organized the application with a models and templates folder and had a main file as my controller. This allowed me to call the models when necessary and do the majority of the work in the main file making this application very controller heavy.

<!-- Code snippet -->


```python

@app.route('/blogs/')
def blogs():
    print('(IN BLOG) session user' ,session['user'])
    username = str(request.args.get('username'))
    print('>>> username in blog: %s' % username)

    blogs = mb.get_blogs(username)
    print('>>> Sending user_all_blogs.html template')
    return render_template('user_all_blogs.html', username=username, blogs=blogs)

```


<!-- Code explanation -->
As you can see in the code snippet above there is a lot of logic happening in the controller and each route in the controller is working to pull and pass information from the models to the views.


<!-- Code snippet -->


```python
def get_all_blogs():
    select_all_statement = "SELECT * FROM blogs"
    cursor.execute(select_all_statement)
    data = cursor.fetchall()

    blogs_list = []

    for row in data:
        blog_id = row[0]
        user_id = row[1]
        title = row[2]
        text = row[3]
        print (">>>> this is data primary key", blog_id)
        post = Blog(blog_id, user_id, title, text)

        blogs_list.append(post)

    return blogs_list


```
<!-- Code explanation -->
In the code above shows one of the functions in the blog model. This code is the 'get_all_blogs' function that uses mySQL code to pull a list of blogs from the database and organize the information into a list of properties that it iterates through with a for loop for each blog. The 'blogs_list' is then returned and is used to display on the view of a list of all blogs. 
