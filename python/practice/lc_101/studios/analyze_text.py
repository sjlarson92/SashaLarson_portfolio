Problem:

Write a function analyze_text that receives a string as input. Your function should count the number of alphabetic characters (a through z, or A through Z) in the text and also keep track of how many are the letter 'e' (upper or lowercase).

Your function should return an analysis of the text in the form of a string phrased exactly like this:

“The text contains 240 alphabetic characters, of which 105 (43.75%) are ‘e’.”

You will need to make use of the isalpha function, which can be used like this

Step by step

define analyze_text funcion (string_input)

create a for loop to count all alphabetic characters
and save the total to a variable
create another for loop to count all 'e' characters
save the total to a variable
calculate the percentage of 'e' characters in the total string
    total 'e' char/total alpha char * 100

print string that states how many alpha characters, e char and the percentage


Solution

def analyze_text(word):
    for char in word:
        if char.isalpha() == True:
            alpha_char += count(char)
