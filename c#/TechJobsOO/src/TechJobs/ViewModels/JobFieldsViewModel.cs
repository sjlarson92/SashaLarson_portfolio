using System;
using System.Collections.Generic;
using TechJobs.Models;

namespace TechJobs.ViewModels
{
    public class JobFieldsViewModel : BaseViewModel
    {

        // The current column
        public JobFieldType Column { get; set; }

        // All fields in the given column
        public IEnumerable<JobField> Fields { get; set; }

    }
}
