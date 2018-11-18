using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ChocolateMVC.Controllers
{
    public class ChocolateController : Controller
    {
      static private Dictionary<string,string> Chocolates = new Dictionary<string,string>();

      public IActionResult Index()
      {

        // List<string> chocolates = new List<string>();
        //
        // chocolates.Add("Dark Chocolate");
        // chocolates.Add("Milk Chocolate");
        // chocolates.Add("White Chocolate");

        ViewBag.chocolates = Chocolates; //this allows the data to be passed to the View file and used there

        return View(); //this calls the view template for the action name "Index" in the controller "Home" Folder located under Views
      }

      public IActionResult Add()
      {
        return View();
      }

      [HttpPost]
      [Route("/Chocolate/Add")]
      public IActionResult NewChocolate(string name, string description)
      {
        //Add new chocolate to the list of chocolates
        //dict.Add(new KeyValuePair<int, string>(1, "One"));
        Chocolates.Add(name, description); //this will look at the chocolates list created in the controller and add the name/user input to this list

        return Redirect("/Chocolate");
      }
    }
}
