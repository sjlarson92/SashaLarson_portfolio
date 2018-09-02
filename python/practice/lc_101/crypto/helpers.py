l_alphabet = 'abcdefghijklmnopqrstuvwxyz' # string of lower case alphabet set equal to variable
u_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" # string of upper case alphabet set equal to variable

def alphabet_position(letter): #defines alphabet_position() and passes one parameter
    if letter.isupper(): # if statement checkes if letter is alphabetic using isalpha()
        return u_alphabet.index(letter) # returns the index number of the letter from the uppercase list
    else:
        return l_alphabet.index(letter) # returns the index number of the letter from the lowercase list
    # for char in alphabet:
    #     if char == letter:
    #         print char[i]#index number for letterc

#use this to test alphabet_position()
#print(alphabet_position(raw_input("enter a letter: ")))

#rotate_character
# Next, write another helper function rotate_character(char, rot) which receives a character char (that is, a string of length 1), and an integer rot. Your function should return a new string of length 1, the result of rotating char by rot number of places to the right.

#'Uvs osck rmwse bh auebwsih!'

def rotate_character(char, rot): # defines rotate_character() passes two parameters
    if char.isalpha(): # if that checks if character is alphabetic using isalpha()
        start = alphabet_position(char) # calls the alphabet_position() and passes char which finds that index number of char and sets that equal to start
        new_position = (((start - 26) + rot) % 26) # this rotates the character and makes sure that it does not go out of range of the alphabet.
        if char.isupper():
            return u_alphabet[new_position] #returns the new letter by its index position
        else:
            return l_alphabet[new_position] #returns the new letter by its index position
    else:
        return char #returns the character unmodified if it was not alphabetic

#USE THIS TO TEST rotate_character()
# user_char = raw_input("enter one letter: ")
# user_rot = input("Enter the number of rotations: ")
# print(rotate_character(user_char, user_rot))
