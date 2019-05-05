# ADVENTURE GAME

<!-- Project BIO -->
 Adventure Game is a web application that allows the user to play a text adventure game that is story based and the players choices determine the outcome.

 I created this project to practice and show my skill with Python and developing a full stack web application.

This application displays some of my skills with:

- Python
- MVC Web Framework
- MySQL
- Flask



<!-- Screenshots -->
<div align="center">

### HOME PAGE
<img src= "/c%23/AdventureGame_project/images/StartGame.png" width= 60% length= 60%>

### ADD NEW CATEGORY
<img src= "/c%23/CheeseMVCPersistent/images/Add%20Category.png" width= 60% length= 60%>

### NEW CATEGORY INDEX
<img src= "/c%23/CheeseMVCPersistent/images/New%20Category.png" width= 60% length= 60%>



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
