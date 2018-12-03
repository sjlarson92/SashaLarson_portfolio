using System;
﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TechJobs.Models;

namespace TechJobs.Controllers
{
    public class SearchController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.columns = ListController.columnChoices;
            ViewBag.title = "Search";
            return View();
        }

        public IActionResult Results(string searchType, string searchTerm)
        {
          Console.WriteLine("This is the results method");
          ViewBag.columns = ListController.columnChoices;
          ViewBag.title = "Search";

          Console.WriteLine(">>> The searchType is : " + searchType);

          Console.WriteLine(">>> The seachTerm is : " + searchTerm);

          if (searchType.Equals("all"))
          {

              List<Dictionary<string, string>> jobs = JobData.FindByValue(searchTerm);
              ViewBag.resultsTitle =  "All " + searchTerm + " Results";
              ViewBag.jobs = jobs;
              return View("Index");
          }
          else
          {
            List<Dictionary<string, string>> jobs = JobData.FindByColumnAndValue(searchType, searchTerm);
            ViewBag.resultsTitle =  "All " + searchType + ":" + searchTerm + " Results";
            //ViewBag.column = searchType;
            ViewBag.jobs = jobs;
            return View("Index");
          }

        }
        // TODO #1 - Create a Results action method to process
        // search request and display results

    }
}
