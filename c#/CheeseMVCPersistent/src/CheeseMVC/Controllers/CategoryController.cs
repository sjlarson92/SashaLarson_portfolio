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
    }
}
