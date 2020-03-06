# CHEESE MVC

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

# How to Change the Hosting Environment for Mac

```bash
export ASPNETCORE_ENVIRONMENT="Development"
# This will change the Hosting Environment to "Development"
```

## How to Downgrade Dotnet

First go into .csproj file and edit the version for to the old versions you want. Use the Microsoft.Net website to find older versions and test which ones are compatible with your PC. Make sure to use dotnet restore to update packages.

Afterwards go to startup.cs file and remove ILoggerFactory method as this is not compatible. Make sure to remove all instances and dependencies.

Remove/comment out this code:

```cs
loggerFactory.AddConsole(Configuration.GetSection("Logging"));
loggerFactory.AddDebug();
```

Packet Versions that work with my PC (used for project TechJobs):

```cs
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>netcoreapp1.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.Mvc" Version="1.1.8" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore" Version="1.1.7" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.Extensions.Configuration.EnvironmentVariables"
    Version="1.1.2" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.StaticFiles"
    Version="1.1.2" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.VisualStudio.Web.BrowserLink"
    Version="1.1.3" />
  </ItemGroup>


  <ItemGroup>
    <DotNetCliToolReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Tools" Version="2.0.0" />
  </ItemGroup>

</Project>
```

