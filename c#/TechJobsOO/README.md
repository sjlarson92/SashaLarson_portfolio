# Tech Jobs
<!-- Project BIO -->
A full stack interactive web application used to search/list jobs. The user is able to query through the job database by Employer, Location, Core competency and Position and is able to list the jobs or search/filter for specific criterias.

This application displays some of my skills with:

- C#
- .NET
- Docker
- MySQL

<!-- Screenshots -->
<div align="center">

### HOME
<img src= "/c%23/TechJobsOO/images/Home.png" width= 60% length= 60%>

### SEARCH
<img src= "/c%23/TechJobsOO/images/Search.png" width= 60% length= 60%>

### SEARCH RESULT
<img src= "/c%23/TechJobsOO/images/SearchResult.png" width= 60% length= 60%>

### LIST
<img src= "/c%23/TechJobsOO/images/List.png" width= 60% length= 60%>

### LIST ALL JOBS
<img src= "/c%23/TechJobsOO/images/ListAll.png" width= 60% length= 60%>

### LIST JOBS BY EMPLOYER
<img src= "/c%23/TechJobsOO/images/ListByEmployer.png" width= 60% length= 60%>

</div>

<!-- Code explanation -->
For TechJobs I used the .NET framework to organized the application into a MVC pattern. This allowed me to efficiently recieve user input, query the data and return the results to the user in a friendly format.

<!-- Code snippet -->


```c#

 // Lists the values of a given column, or all jobs if selected
        public IActionResult Values(JobFieldType column)
        {
            if (column.Equals(JobFieldType.All))
            {
                SearchJobsViewModel jobsViewModel = new SearchJobsViewModel();
                jobsViewModel.Jobs = jobData.Jobs;
                jobsViewModel.Title =  "All Jobs";
                return View("Jobs", jobsViewModel);
            }
            else
            {
                JobFieldsViewModel jobFieldsViewModel = new JobFieldsViewModel();

                IEnumerable<JobField> fields;

                switch (column)
                {
                    case JobFieldType.Employer:
                        fields = jobData.Employers.ToList().Cast<JobField>();
                        break;
                    case JobFieldType.Location:
                        fields = jobData.Locations.ToList().Cast<JobField>();
                        break;
                    case JobFieldType.CoreCompetency:
                        fields = jobData.CoreCompetencies.ToList().Cast<JobField>();
                        break;
                    case JobFieldType.PositionType:
                    default:
                        fields = jobData.PositionTypes.ToList().Cast<JobField>();
                        break;
                }

                jobFieldsViewModel.Fields = fields;
                jobFieldsViewModel.Title =  "All " + column + " Values";
                jobFieldsViewModel.Column = column;

                return View(jobFieldsViewModel);
            }
        }

```

<!-- Code explanation -->
The code snippet above shows the logic in the ListController that determines which jobs are rendered based on the column (JobFieldType) chosen by the user.

```c#

// Process search submission and display search results
        public IActionResult Results(SearchJobsViewModel jobsViewModel)
        {

            if (jobsViewModel.Column.Equals(JobFieldType.All) || jobsViewModel.Value.Equals(""))
            {
                jobsViewModel.Jobs = jobData.FindByValue(jobsViewModel.Value);
            }
            else
            {
                jobsViewModel.Jobs = jobData.FindByColumnAndValue(jobsViewModel.Column, jobsViewModel.Value);
            }
            
            jobsViewModel.Title = "Search";

            return View("Index", jobsViewModel);
        }

```

The snippet above is the method in the SearchController that searches the jobs in the database either by querying all jobs or by querying only the column selected by the user and then displays the results to the user.