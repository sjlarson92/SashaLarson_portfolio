using System;
using System.Collections.Generic;

namespace Studio_CountingCharacters
{
  class Program
  {
    public static string inputString = "This is my test string";

    static void Main(string[] args)
      {
        Dictionary<char, int> charCount = new Dictionary<char, int>();

        foreach(char letter in inputString)
        {
          if(!charCount.ContainsKey(letter))
          {
            charCount.Add(letter, 1);
          }
          else
          {
            int currentCount = charCount[letter];
            currentCount++;
            charCount[letter] = currentCount;
          }
        }

        foreach(KeyValuePair<char, int> pair in charCount)
        {
          Console.WriteLine($"{(char)pair.Key}:{pair.Value}");
        }
        Console.ReadLine();
      }
  }
}
