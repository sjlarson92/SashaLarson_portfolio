<!--https://help.github.com/en/articles/basic-writing-and-formatting-syntax#links link to git formatting reference -->

# Sasha Larson's Portfolio:
Welcome to my Monorepo Portfolio

<!-- HTML and README.md comment syntax

Steps to set up Monorepo for Github

1. Banner
2. Contact Info
3. Monorepo Intro
4. About Me
5.Project Showcase: featured projects with code snippets and screen shots
6.Contact info again

-Each technology folder has a brief summary and features the showcase projects in that technology

-each big project has thier summary within their folder

-practice folders do not need summarys
 -->

 <!-- BANNER -->

## CONTATCT INFO
<!--Email Image-->
<!-- [Email](sjlarson92@gmail.com)

<!--LinkedIn Image-->

<!-- [LinkedIn](https://www.linkedin.com/in/sjlarson92/) -->

<!--WordPress Image [WordPress]() -->

<div align="center">
  <!-- BANNER IMG -->

  <!-- <p>
    <a href="#monorepository-portfolio"><strong> Monorepository</strong></a> ·
    <a href="#about-lucas"><strong>About Lucas</strong></a> ·
    <a href="#projects-showcase"><strong>Projects Showcase</strong></a> ·
    <a href="#contact-info"><strong>Contact Info</strong></a>
  </p> -->

  <p>
    <a href="mailto:sjlarson92@gmail.com"><img src="/wiki/img/Gmail-icon.png" height="30px" width="30px"><strong> Email Me </strong></a> ·
    <a href="https://www.linkedin.com/in/sjlarson92/"><img src="/wiki/img/linkedin-icon.png" height="30px" width="30px"><strong> LinkedIn </strong></a> ·
  </p>

  <p> Thanks for checking out my GitHub monorepository! This is part of my online portfolio. Here you will find information about me, my skills, and projects that I’ve worked on.
  </p>
</div>

## MONOREPOSITORY

In order to better display my projects I have set up my portfolio as a single repository. This allows me to properly showcase my large projects on center stage and organize my projects by technology allowing easy navigation.

<!-- Monorepo Tree Diagram -->

## ABOUT SASHA

I am dedicated, persistent and hardworking. I constantly strive to improve and prepare for any future challenges. I enjoy exploring new ideas and learning to expand my horizons and gain perspectives on different issues.

I have worked in a wide range of careers and I use each experience to enhance my personal and professional work.

I have experience with the following technologies:
- Development: Python, C#
- Web Frameworks: Flask
- Database: Postgres, MySQL
- Front end: HTML, CSS, Javascript, Bootstrap
- Console: Git, Bash

## PROJECT SHOWCASE

This section shows some of my larger and favorite projects that I have worked on. I have included a summary of each project with details to the concepts, logic along with code snippets and screenshots.

Currently my most impressive complete projects were done in Python and C#. I am also currently working on another large project in Python.

<!-- Project section -->
<h2><a href="https://github.com/sjlarson92/SashaLarson_portfolio/tree/master/c%23/CheeseMVCPersistent">Cheese MVC</a></h2>

<!-- Project BIO -->
Cheese MVC is a standard web application which allows the user to create a Menu along with different Cheese items that have specific categories that can be set and added to a menu. This app is an exercise in creating a full-stack web application with a front-end, back-end and database.

This app was made in roughly 2 months, I did this project as part of an assignment by LaunchCode a non-profit organization that provides free coding lessons to the community.

This application displays some of my skills with:

- C#
- MVC Web Framework
- MySQL


<!-- Screenshots -->
<div align="center">
### CHEESE INDEX
<img src= "/c%23/CheeseMVCPersistent/images/home.png" width= 60% length= 60%>

### CATEGORY INDEX
<img src= "/c%23/CheeseMVCPersistent/images/Categories.png" width= 60% length= 60%>

### ADD NEW CATEGORY
<img src= "/c%23/CheeseMVCPersistent/images/Add%20Category.png" width= 60% length= 60%>

### NEW CATEGORY INDEX
<img src= "/c%23/CheeseMVCPersistent/images/New%20Category.png" width= 60% length= 60%>

### ADD NEW CHEESE
<img src= "/c%23/CheeseMVCPersistent/images/Add%20Cheese.png" width= 60% length= 60%>

### NEW CHEESE INDEX
<img src= "/c%23/CheeseMVCPersistent/images/New%20Cheese.png" width= 60% length= 60%>

### ADD NEW MENU
<img src= "/c%23/CheeseMVCPersistent/images/Add%20Menu.png" width= 60% length= 60%>

### NEW MENU CREATED
<img src= "/c%23/CheeseMVCPersistent/images/New%20Menu.png" width= 60% length= 60%>

### ADD CHEESE TO NEW MENU
<img src= "/c%23/CheeseMVCPersistent/images/Add%20Cheese%20to%20New%20Menu.png" width= 60% length= 60%>

### NEW MENU WITH CHEESE
<img src= "/c%23/CheeseMVCPersistent/images/New%20Menu%20with%20cheese.png" width= 60% length= 60%>

### REMOVE CHEESE
<img src= "/c%23/CheeseMVCPersistent/images/Remove%20Cheese.png" width= 60% length= 60%>

### CHEESE REMOVED
<img src= "/c%23/CheeseMVCPersistent/images/New%20Cheese%20Removed.png" width= 60% length= 60%>

</div>
<!-- Code explanation -->
To run this application on my Mac I used docker to run the SQL Server and also used dotnet to run the application through my console.

<!-- Code snippet -->
You can see that in this code snippet that after turning on docker I would start up the SQL Server and then run dotnet and with a successful build this would run the application.

```console

docker start nameOfServer

dotnet run

```


<!-- Code explanation -->
The application is setup using MVC methodology and uses models, views and controllers to allow for a better organized application. I set up so that each controller had their own view and view models which allows me to pass information more easily from the back-end to the front-end.

<!-- Code snippet -->
You can see that in this code snippet which is located in the CategoryController and creates a viewmodel to handle the action of adding a new category. It intakes information from the user and then posts this information using the viewmodel to the database where it is saved.

```c#
public IActionResult Add()
{
  AddCategoryViewModel addCategoryViewModel = new AddCategoryViewModel();

  return View(addCategoryViewModel);
}

[HttpPost]
public IActionResult Add(AddCategoryViewModel addCategoryViewModel)
{
    if (ModelState.IsValid)
    {
        // Add the new category to my existing categories
        CheeseCategory newCategory = new CheeseCategory
        {
            Name = addCategoryViewModel.Name,

        };

        context.Categories.Add(newCategory);
        context.SaveChanges();

        return Redirect("/Category");
    }

    return View(addCategoryViewModel);
}


```
