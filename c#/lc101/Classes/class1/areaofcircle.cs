using System;
namespace Area
{
    class Program
    {
        static void Main(string[] args)
        {

            //user input radius
            Console.WriteLine("Enter radius");
            string radiusInput = Console.ReadLine();
            //set pi for calculation
            double pi = 3.14;
            //calculate Area
            double Area = CalculateArea(radiusInput, pi);
            //print out Area
            Console.WriteLine(Area);
            Console.ReadLine();
        }
        private static double CalculateArea(string radiusInput, double pi)
        {
            double Area = 0;
            double radius = double.Parse(radiusInput);
            Area = pi * radius * radius;
            return Area;
        }
    }
        //this is the method for CalulateArea and says the return will be an int
}
