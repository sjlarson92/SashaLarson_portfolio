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

        [HttpGet]
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

        [HttpGet]
        [Route("Menu/ViewMenu/{id}")]
        public IActionResult ViewMenu(int id)
        {
          Menu newMenu = context.Menus.Single(m => m.ID == id);

          Console.WriteLine(">>>>>>>>>>>>The Menu name is : " + newMenu.Name );

          List<CheeseMenu> items = context
                  .CheeseMenus
                  .Include(item => item.Cheese)
                  .Where(cm => cm.MenuID == id)
                  .ToList();
          Console.WriteLine(">>> After calling CheeseMenus DB");
          Console.WriteLine(">>> items: " + items);
          //if there are no items in the menu this will return null

          ViewMenuViewModel viewMenuViewModel = new ViewMenuViewModel
          {
              Menu = newMenu,
              Items = items

          };

          ViewBag.Title = newMenu.Name;
          return View(viewMenuViewModel);

        }

        [HttpGet]
        [Route("Menu/AddItem/{id}")]
        public IActionResult AddItem(int id)
        {
          Menu newMenu = context.Menus.Single(m => m.ID == id);

          Console.WriteLine(">>>>>>>>>>>>The Menu name is : " + newMenu.Name );

          IList<Cheese> cheeses = context.Cheeses.ToList();


          AddMenuItemViewModel addMenuItemViewModel = new AddMenuItemViewModel(newMenu, cheeses);
          // ViewBag.Title = newMenu.Name;
          return View(addMenuItemViewModel);

        }

        [HttpPost]
        public IActionResult AddItem(AddMenuItemViewModel addMenuItemViewModel)
        {
          int cheeseID = addMenuItemViewModel.cheeseID;
          int menuID = addMenuItemViewModel.menuID;

          Console.WriteLine(">>> Add Item the cheeseID is: " + cheeseID);
          Console.WriteLine(">>> Add Item the menuID is: " + menuID);

          if (ModelState.IsValid)
          {
            IList<CheeseMenu> existingItems = context.CheeseMenus
            .Where(cm => cm.CheeseID == cheeseID)
            .Where(cm => cm.MenuID == menuID).ToList();

            // if (existingItems.Count == 0){

            CheeseMenu newCheeseMenu = new CheeseMenu{

              MenuID = addMenuItemViewModel.menuID,
              CheeseID = addMenuItemViewModel.cheeseID
            };


              context.CheeseMenus.Add(newCheeseMenu);
              context.SaveChanges();

              //return Redirect("/Menu/ViewMenu/{@menuID}");
              return RedirectToRoute(new
              {
                  controller = "Menu",
                  action = "ViewMenu",
                  id = menuID,
              });
            }

            else
            {
              //how do i display this message on the page?
              Console.WriteLine(">>>> This Cheese is already a part of this menu ");
            }

          return View(addMenuItemViewModel);
        }


    }
}
