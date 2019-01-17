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
          // List<Cheese> cheeses = context.Cheeses.ToList();

          return View;
      }

    }
}
