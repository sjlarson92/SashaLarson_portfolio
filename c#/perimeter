//notes for lc101 c# class 1

using System;

namespace Perimeter
{
  class Program
  {
    static void Main(string[] args)
    {
      //user input height
      Console.WriteLine("Enter height: "); //this request user input
      string heightInput = Console.ReadLine(); //this makes the computer request input and then read the input and save it to the string variable heightInput, also stops console from closing automatically

      //user input width
      Console.WriteLine("Enter width");
      string widthInput = Console.ReadLine();

      //calculate perimeter
      int perimeter = CalculatePerimeter(heightInput, widthInput);

      //print out perimeter
      Console.WriteLine(perimeter);
      Console.ReadLine();
    }


    //this is the method for CalculatePerimeter and says the return will be an int

    private static int CalculatePerimeter(string heightInput, string widthInput)
    {
      int perimeter = 0;
      int height = int.Parse(heightInput);
      int width = int.Parse(widthInput);

      perimeter = 2 * height + 2 * width;

      return perimeter;

    }
  }
}
