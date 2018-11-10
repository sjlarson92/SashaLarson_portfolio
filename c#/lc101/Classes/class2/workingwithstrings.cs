using System;

namespace WorkingWithStrings
{
  class Program
  {
    static void Main(string[] args)
    {
      string myString = " "; //use \ to escape special characters like ""

      string placeholder = string.Format("{0} = {1}" ,"First", "Second");
      //this will print " Fisrt = Second" knownw as replacement code

      string currency = string.Format("{0:C}", 123.45);
      //this replacement code will print $123.45

      string decimalPoints = string.Format("{0:N}", 1234567890);
      //this replacement code will print 1,234,567,890

      string percent = string.Format("{0:P}", .123);
      //this replacement code will print the integer as a percentage : 12.3%

      string customphoneNumber = string.Format("Phone Number: {0: (###) ###-####}", 1234567890);
      //this is a custom replacement code that i have set to print in the format for phone nubmers and will print: (123) 456-7890
      //if more numbers are provided than are in the format it will push the number from right to left ex: 1234567890123 will print: (123456) 789-0123

      string exampleString = "I hope it doesn't snow tonight"
      string exampleString = exampleString.Substring(7);
      // this will print everything starting at index 7 and after
      // it doesn't snow tonight

      Console.WriteLine(myString);
      Console.ReadLine();
    }
  }
}// \n creates a newline
// can use \\ to show the backslash or can use @ in front of string to let C# know we want the literal string
