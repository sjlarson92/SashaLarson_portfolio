using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ChocolateMVC.Models
{
  public class Chocolate
  {

    public string Name { get; set; }
    public string Description { get; set; }

    // public Chocolate(string name, string description)
    // {
    //   Name = name;
    //   Description = description;
    // }

      public Chocolate(){}


  }
}
