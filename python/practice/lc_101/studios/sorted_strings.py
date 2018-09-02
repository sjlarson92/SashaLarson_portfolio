Problem

Since a string is just a sequence of characters, they can be sorted from least to greatest. Sorting can be hard so we’re just going to check if a string is sorted. Write a function which returns a boolean indicating if the string is sorted or not.

Here’s an example of how your function should behave. (Recall that the order operators are case-sensitive, so that "A" < "a" evaluates to True.)


#from test import testEqual

check if the string is sorted
a string is sorted if it goes from least to greatest (left to right)

check if the character furthest to the left is smaller than the one to its right

is_sorted("ABC") == True
is_sorted("aBc") == False
is_sorted("dog") == False


Step by step

use a for loop to go through the string
if the first character is bigger than second character return False
elif the first characer is smaller than the second character return True

for i in range(len(string)):
    if string[i] > string[i + 1]:
        return False
    elif string[i] < string[i + 1]:
        return True

Solution
