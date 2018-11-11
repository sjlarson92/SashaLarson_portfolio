using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;

namespace TechJobsConsole
{
    class JobData
    {
        static List<Dictionary<string, string>> AllJobs = new List<Dictionary<string, string>>();//initializes new list of dictionaries known as all jobs
        static bool IsDataLoaded = false;

        //method used to find all returns a dictionary
        public static List<Dictionary<string, string>> FindAll()
        {
            LoadData();//calls the LoadData method
            return AllJobs; //returns AllJobs
        }

        /*
         * Returns a list of all values contained in a given column,
         * without duplicates.
         */
        public static List<string> FindAll(string column)
        {
            LoadData();

            List<string> values = new List<string>();//initializes empty string list set equal to variable values

            foreach (Dictionary<string, string> job in AllJobs) //foreach dictionary/job in AllJobs do the following:
            {
                string aValue = job[column]; //set the value to the key "column" equal to aValue

                if (!values.Contains(aValue))
                {
                    values.Add(aValue);
                }
            }
            return values;
        }

        public static List<Dictionary<string, string>> FindByColumnAndValue(string column, string value)
        {
            // load data, if not already loaded
            LoadData();

            List<Dictionary<string, string>> jobs = new List<Dictionary<string, string>>();

            foreach (Dictionary<string, string> row in AllJobs)
            {
                string aValue = row[column];

                if (aValue.Contains(value))//if the value of the key pair contains the value of the search term then run this:
                {
                    jobs.Add(row);
                }
            }

            return jobs;
        }

        /*
         * Load and parse data from job_data.csv
         */
        private static void LoadData()
        {

            if (IsDataLoaded)//runs if IsDataLoaded is true, declared false at beginning of JobData class
            {
                return;
            }

            List<string[]> rows = new List<string[]>();

            using (StreamReader reader = File.OpenText("job_data.csv")) //opens csv to be read
            {
              //this method reads the csv file and adds each full entry into the rows list
                while (reader.Peek() >= 0)
                {
                    string line = reader.ReadLine();
                    string[] rowArrray = CSVRowToStringArray(line);
                    if (rowArrray.Length > 0)
                    {
                        rows.Add(rowArrray);
                    }
                }
            }

            string[] headers = rows[0]; //sets the var headers equal to the first index in rows which is "name,employer,location,position type,core competency"
            rows.Remove(headers);//removes the headers from rows so that it reads from line 2 down

            // Parse each row array into a more friendly Dictionary
            foreach (string[] row in rows)
            {
                Dictionary<string, string> rowDict = new Dictionary<string, string>();//creates a new Dictionary call rowDict

                for (int i = 0; i < headers.Length; i++)//starts a for loop starting at 0 while i is less than the headers length and then adds one
                {
                    rowDict.Add(headers[i], row[i]);//creates a dictionary with key value pairs matching header to value
                }
                //each entry in the csv is being saved as key/value pairs in the rowDict and then being added to the list All Jobs (AllJobs is a LIST of DICTIONARIES!)
                AllJobs.Add(rowDict);
            }

            IsDataLoaded = true;
        }

        /*
         * Parse a single line of a CSV file into a string array
         */
        private static string[] CSVRowToStringArray(string row, char fieldSeparator = ',', char stringSeparator = '\"')
        {
            bool isBetweenQuotes = false;
            StringBuilder valueBuilder = new StringBuilder();
            List<string> rowValues = new List<string>();

            // Loop through the row string one char at a time
            foreach (char c in row.ToCharArray())
            {
                if ((c == fieldSeparator && !isBetweenQuotes))
                {
                    rowValues.Add(valueBuilder.ToString());
                    valueBuilder.Clear();
                }
                else
                {
                    if (c == stringSeparator)
                    {
                        isBetweenQuotes = !isBetweenQuotes;
                    }
                    else
                    {
                        valueBuilder.Append(c);
                    }
                }
            }

            // Add the final value
            rowValues.Add(valueBuilder.ToString());
            valueBuilder.Clear();

            return rowValues.ToArray();
        }
    }
}
