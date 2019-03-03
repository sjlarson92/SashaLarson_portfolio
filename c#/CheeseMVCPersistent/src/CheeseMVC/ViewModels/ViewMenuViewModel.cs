using CheeseMVC.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CheeseMVC.ViewModels
{
    public class ViewMenuViewModel
    {
        [Required]
        public Menu Menu { get; set; }

        public IList<CheeseMenu> Items { get; set; }

        public ViewMenuViewModel(){} //empty default constructor

        public ViewMenuViewModel(IEnumerable<CheeseMenu> items, Menu menu) {

          Console.WriteLine("Before this.Menu");
          this.Menu = menu;
          Console.WriteLine(">>> Assigning menu to this.Menu with name" + this.Menu.Name);

          foreach (var item in items)
          {
            this.Items.Add(new CheeseMenu{
              MenuID = ((int) item.MenuID),
              Cheese = item.Cheese,
              });
          }

        }


    }


}
