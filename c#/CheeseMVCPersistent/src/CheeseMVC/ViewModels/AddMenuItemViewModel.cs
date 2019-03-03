using CheeseMVC.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CheeseMVC.ViewModels
{
    public class AddMenuItemViewModel
    {
        [Required]
        [Display(Name = "Cheeses: ")]
        public int cheeseID { get; set; }

        [Required]
        public int menuID { get; set; }


        public Menu menu { get; set; }

        public List<SelectListItem> Cheeses { get; set; }

        public AddMenuItemViewModel(){} //empty default constructor

        public AddMenuItemViewModel(Menu menu, IEnumerable<Cheese> cheeses){

          Cheeses = new List<SelectListItem>();

          this.menu = menu;

          foreach (var cheese in cheeses)
          {
            Cheeses.Add(new SelectListItem{
                Value = ((int)cheese.ID).ToString(),
                Text = cheese.Name.ToString(),
            });
          }

        }
    }
}
