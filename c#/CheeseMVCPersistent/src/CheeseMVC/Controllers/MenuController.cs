using Microsoft.AspNetCore.Mvc;
using CheeseMVC.Models;
using System.Collections.Generic;
using CheeseMVC.ViewModels;
using CheeseMVC.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;


namespace CheeseMVC.Controllers
{
    public class MenuController : Controller
    {
        private CheeseDbContext context;

        public MenuController(CheeseDbContext dbContext)
        {
            context = dbContext;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {

          IList<Menu> menus = context.Menus.ToList();

            return View(menus);
        }

        public IActionResult Add()
        {
            //IList<Category> categories = context.Categories.ToList()

            AddMenuViewModel addMenuViewModel = new AddMenuViewModel();
            return View(addMenuViewModel);
        }

        [HttpPost]
        public IActionResult Add(AddMenuViewModel addMenuViewModel)
        {
          Console.WriteLine(">>>>>>This is the Add function in the MenuController");
           //Start testing with console logs
            if (ModelState.IsValid)
            {
              Console.WriteLine(">>>>>>This runs if the ModelState.IsValid");

                // Add the new cheese to my existing cheeses
                //CategorID is not being passed!!! and is being shown as zero


                Menu newMenu = new Menu
                {
                    Name = addMenuViewModel.Name,
                };

                context.Menus.Add(newMenu);
                context.SaveChanges();

                return Redirect("/Menu/ViewMenu/" + newMenu.ID);
            }

            return View(addMenuViewModel);
        }


    }
}
