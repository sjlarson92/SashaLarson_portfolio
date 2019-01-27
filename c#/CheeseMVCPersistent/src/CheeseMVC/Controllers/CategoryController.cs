using Microsoft.AspNetCore.Mvc;
using CheeseMVC.Models;
using System.Collections.Generic;
using CheeseMVC.ViewModels;
using CheeseMVC.Data;
using System.Linq;

namespace CheeseMVC.Controllers
{
    public class CategoryController : Controller
    {
      private readonly CheeseDbContext context;

      public CategoryController(CheeseDbContext dbContext)
      {
        context = dbContext;
      }
      // This creates a private field context of type CheeseDbContext. This object will be the mechanism with which we interact with objects stored in the database. The MVC framework will do the work of creating an instance of CheeseDbContext and passing it into our controller's constructor.
      //
      // This code would need to be added to each controller class that you want to have access to the persistent collections defined within CheeseDbContext.
      public IActionResult Index()
      {

          List<CheeseCategory> categories = context.Categories.ToList();

          // The Index action should retrieve the list of all categories. This is done via the context object: context.Categories.ToList() returns a list of all CheeseCategory objects managed by CheeseDbContext. Use this snippet to retrieve the list of categories, and then pass the list into the view.

          return View(categories);
      }

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

              context.Categories.Add(newCategory)
              context.SaveChanges();

              return Redirect("/Category")
          }

          return View(addCategoryViewModel);
      }

    }
}
