using System;
using System.Collections.Generic;

namespace TechJobsConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create two Dictionary vars to hold info for menu and data

            // Top-level menu options
            Dictionary<string, string> actionChoices = new Dictionary<string, string>();
            actionChoices.Add("search", "Search");
            actionChoices.Add("list", "List");

            // Column options
            Dictionary<string, string> columnChoices = new Dictionary<string, string>();
            columnChoices.Add("core competency", "Skill");
            columnChoices.Add("employer", "Employer");
            columnChoices.Add("location", "Location");
            columnChoices.Add("position type", "Position Type");
            columnChoices.Add("all", "All");

            Console.WriteLine("Welcome to LaunchCode's TechJobs App!");

            // Allow user to search/list until they manually quit with ctrl+c
            while (true)
            {

                string actionChoice = GetUserSelection("View Jobs", actionChoices); //gets user input for what they want to search (search or list)

                if (actionChoice.Equals("list"))//will run if userinput was "list"
                {
                    string columnChoice = GetUserSelection("List", columnChoices);//will return userchoice for column user wishes to list by

                    if (columnChoice.Equals("all"))//will run if user choice is "all"
                    {
                        Console.WriteLine("\n*** All Values ***");
                        PrintJobs(JobData.FindAll());//this method will search for all jobs and print them out
                    }
                    else
                    {
                        List<string> results = JobData.FindAll(columnChoice);//initializes variable results as a list and sets it equal to the return for JobData.FindAll with the users columnChoice

                        //this returns all values listed by column choice

                        Console.WriteLine("\n*** All " + columnChoices[columnChoice] + " Values ***");
                        foreach (string item in results)
                        {
                            Console.WriteLine(item);
                        }
                    }
                }
                else // choice is "search"
                {
                    // How does the user want to search (e.g. by skill or employer)
                    string columnChoice = GetUserSelection("Search", columnChoices);

                    // What is their search term?
                    Console.WriteLine("\nSearch term: ");
                    string searchTerm = Console.ReadLine();

                    List<Dictionary<string, string>> searchResults;//initializes new list of dictionaries called searchResults

                    // Fetch results
                    if (columnChoice.Equals("all"))
                    {
                      Console.WriteLine("*** This is the all search option");
                      searchResults = JobData.FindByValue(searchTerm);//calls the FindByColumnAndValue method from JobData
                      PrintJobs(searchResults);
                    }
                    else
                    {
                        searchResults = JobData.FindByColumnAndValue(columnChoice, searchTerm);//calls the FindByColumnAndValue method from JobData
                        PrintJobs(searchResults);
                    }
                }
            }
        }

        /*
         * Returns the key of the selected item from the choices Dictionary
         */
        private static string GetUserSelection(string choiceHeader, Dictionary<string, string> choices)
        {
            int choiceIdx;
            bool isValidChoice = false;
            string[] choiceKeys = new string[choices.Count];//this is creating a string array with the length of choices.Count

            int i = 0;
            foreach (KeyValuePair<string, string> choice in choices)
            {
                choiceKeys[i] = choice.Key;//this adds the key from the Dictionary to the array of choiceKeys [search, list]
                i++;
            }

            do
            {
                Console.WriteLine("\n" + choiceHeader + " by:");

                for (int j = 0; j < choiceKeys.Length; j++)
                {
                    Console.WriteLine(j + " - " + choices[choiceKeys[j]]);
                }

                string input = Console.ReadLine();//this intakes the user input and saves it to the var input
                choiceIdx = int.Parse(input); //this converts the string input to an int

                if (choiceIdx < 0 || choiceIdx >= choiceKeys.Length)
                {
                    Console.WriteLine("Invalid choices. Try again.");//this is validation to make sure that the user input is valid, does not check for char or special characters
                }
                else
                {
                    isValidChoice = true;//this changes the bool variable isValidChoice to True
                }

            } while (!isValidChoice); //this is part of the do while loop and will continue unti the isValidChoice is true

            return choiceKeys[choiceIdx]; //this will return choiceKeys(dict)[index of the choiceIdx(the user input)]
        }

        private static void PrintJobs(List<Dictionary<string, string>> someJobs)
        {
            //Console.WriteLine("printJobs is not implemented yet");

            //for each item in the list:
            //print the key value pair with each pair on a new line

            int counter = 0;
            foreach (Dictionary<string,string> dict in someJobs)
            {
              Console.WriteLine("\n******");
              foreach (KeyValuePair<string,string> item in dict)
              {

                Console.WriteLine(item.Key + ": " + item.Value);

              }
              Console.WriteLine("******");
              counter++;
            }
            Console.WriteLine("******* Count Total is : " + counter);
        }
    }
}
