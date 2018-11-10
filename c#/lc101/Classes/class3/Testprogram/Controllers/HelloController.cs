// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HelloMVC.Controllers
{
    public class HelloController : Controller
    {
        // GET: /<controller>/
        //route is custom to name so localhost:5000/hello?name=Sasha
        //will return Hello Sasha
        [HttpGet] //this states that the below method will respond to get requests
        public IActionResult Index()
        {
            // if (string.IsNullOrEmpty(name))
            // {
            //   name = "World";
            // }
            //can just put default in method
            // return Content(string.Format("<h1>Hello {0}</h1>", name), "text/html");
          string html = "<form method='post'>" +
            "<input type='text' name='name' />" +
            "<input type='submit' value='Greet Me!' />" +
            "</form>";
          // string html = "Test";

          return Content(html, "text/html");
        }

        [Route("/Hello")] //this customizes the route for the Display route
        [HttpPost]//this states that the below method will respond to post requests
        public IActionResult Display(string name = "World")
        {
          return Content(string.Format("<h1> Hello {0}</h1>", name), "text/html");
        }

        [Route("/Hello/Redirect")]
        public IActionResult Redirect()
        {
          return Redirect("/Hello/Goodbye");
        }


        // Handle requests to /Hello/Name (URL segment)
        [Route("/Hello/{name}")]
        public IActionResult Index2(string name)
        {
          return Content(string.Format("<h1> Hello {0}</h1>", name), "text/html");
        }




        // default route is: /Hello/Goodbye
        // alter route to this controller to be /Hello/Aloha
        // [Route("/Hello/Aloha")]

        public IActionResult Goodbye()
        {
          return Content("Goodbye");
        }
    }
}
