using System;

namespace CountChar
{
    class Program
    {
        public static void Main(string[] args)
        {

          string input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan sem ut ligula scelerisque sollicitudin. Ut at sagittis augue. Praesent quis rhoncus justo. Aliquam erat volutpat. Donec sit amet suscipit metus, non lobortis massa. Vestibulum augue ex, dapibus ac suscipit vel, volutpat eget massa. Donec nec velit non ligula efficitur luctus.";

          Console.WriteLine("This is the string we are testing" + input);
          Console.ReadLine();

        }

    }
}



// Problem:
// Write a program that calculates the number of times each character occurs in a string and prints these counts to the console.
//
// string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan sem ut ligula scelerisque sollicitudin. Ut at sagittis augue. Praesent quis rhoncus justo. Aliquam erat volutpat. Donec sit amet suscipit metus, non lobortis massa. Vestibulum augue ex, dapibus ac suscipit vel, volutpat eget massa. Donec nec velit non ligula efficitur luctus."
//
// Step by Step
// Loop through the string
// save the number of times each character occurs in a variable
//
// for each letter in the string add 1 to the counter
// print out how many of each letter is in the string
//
// Solution

// for char in word:
//   if char is in Dict:
//     add 1 to counter for charInDict
