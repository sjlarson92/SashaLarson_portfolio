using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace viewsExercise.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(); //this calls the view template for the action name "Index" in the controller "Home" Folder located under Views
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
