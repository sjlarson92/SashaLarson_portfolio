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
        [Display(Menu = "Menu")]
        public Menu Menu { get; set; }

        public IList<CheeseMenu> Items { get; set; }

        public ViewMenuViewModel(){} //empty default constructor

        public ViewMenuViewModel(IEnumerable<CheeseMenu> items) {

            //This constructor may be incomplete check for errors later!!
            // Categories = new List<SelectListItem>();
            // foreach (var item in categories)
            // {
            //   Categories.Add(new SelectListItem {
            //       Value = ((int) item.ID).ToString(),
            //       Text = item.Name.ToString(),
            //   });
            }



    }


}
