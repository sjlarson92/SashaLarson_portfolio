import helpers # this imports the file helpers that has two additional functions
# Open up your caesar.py file in Visual Studio Code. In that file, write a function alphabet_position(letter), which receives a letter (that is, a string with only one alphabetic character) and returns the 0-based numerical position of that letter within the alphabet.
#
#
# Step by step:


#Solution:
#
# l_alphabet = 'abcdefghijklmnopqrstuvwxyz'
# u_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
#
# def alphabet_position(letter):
#     if letter.isupper():
#         return u_alphabet.index(letter)
#     else:
#         return l_alphabet.index(letter)
#     # for char in alphabet:
#     #     if char == letter:
#     #         print char[i]#index number for letterc
#
# #use this to test alphabet_position()
# #print(alphabet_position(raw_input("enter a letter: ")))
#
# #rotate_character
# # Next, write another helper function rotate_character(char, rot) which receives a character char (that is, a string of length 1), and an integer rot. Your function should return a new string of length 1, the result of rotating char by rot number of places to the right.
#
# def rotate_character(char, rot): # a, 26
#     if char.isalpha():
#         start = alphabet_position(char) # 0
#         new_position = (start + (rot % 26)) #0 + 1
#         if char.isupper():
#             return u_alphabet[new_position]
#         else:
#             return l_alphabet[new_position]
#     else:
#         return char
#
# #USE THIS TO TEST rotate_character()
# # user_char = raw_input("enter one letter: ")
# # user_rot = input("Enter the number of rotations: ")
# # print(rotate_character(user_char, user_rot))



def encrypt(text, rot): # this defines functin encrypt and accepts two parameters
    new_text = "" # sets an empty string equal to a variable

    for letter in text: # for loop that iterates for each letter in text
        if letter.isalpha(): # if statement that checks if the letter is alphabetic using the isalpla()
            new_char = (helpers.rotate_character(letter, rot)) # calls the rotate_character() in helpers and passes letter and rot
            new_text = new_text + new_char # concatenates new_text and new_char and sets it equal to new_text
        else: # else statement, this runs if letter is not alphabetic
            new_text = new_text + letter # concatenates new_text and new_char and sets it equal to new_text
    return new_text #after the for loop is complete this return the final version of new_text

def main(): # this is the main()
    message = raw_input("Enter your message: ") # this requests string input from user and sets it equal to message
    rotation = input("Enter the number of times you want to rotate: ") # this requests a int input from user and sets it equal to rotation
    print(encrypt(message, rotation)) # calls the encrypt() and passes in the arguments of message and rotation and prints out the result

if __name__ == "__main__":
    main()
