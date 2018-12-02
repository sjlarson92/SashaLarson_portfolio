using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant
{
    public class Menu
    {
        public static KeyValuePair<TKey, TValue> GetMenuItem<TKey, TValue>
        {
            if (lang.Equals("sp")) {
                return "Hello World";
            }
            else if (lang.Equals("fr"))
            {
                return "Bonjour le monde";
            }
            else
            {
                return "Hola Mundo";
            }
        }
    }
}
