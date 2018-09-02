import helpers #this imports helpers file that contains two funtions
# Open up your caesar.py file in Visual Studio Code. In that file, write a function alphabet_position(letter), which receives a letter (that is, a string with only one alphabetic character) and returns the 0-based numerical position of that letter within the alphabet.
#
#
# Step by step:


#Solution:

def encrypt(text, key): #defines encrypt() and passes two parameters
    new_text = "" #set empty string equal to variable
    rot = [] # sets empty list equal to variable
    for i in key: # for loop that iterates through each letter in the key word
        num = helpers.alphabet_position(i) #calls alphabet_position() passing through i, which finds the index number of that letter and sets it equal to the variable num
        rot.append(num) # this adds the num variable to the end of the rot list
        #print("i is %s | num is %s" % (i, num))

    rot_location = 0 # sets int 0 to variable
    for letter in text: # for loop that iterates through each letter in the text argument
        if letter.isalpha(): # checks if letter is alphabetic
            #print("letter is %s | rot[count] is %s : " % (letter, rot[rot_location])) #a
            new_char = (helpers.rotate_character(letter, rot[rot_location])) #calls rotate_character() and passes the letter and the rotation number by its index number and sets this equal to new_char
            new_text = new_text + new_char #this concatinates the new_char to the new_text variable
            rot_location = (rot_location + 1) % len(rot) #this makes sure that the rotation number loops through the list and does not go out of range
        else:
            new_text = new_text + letter # this returns the character unmodified to the variable if it was not alphabetic

    return new_text # this returns the final value of new_text

def main():
    message = raw_input("Enter your message: ") # requests string input from user and sets it equal to message
    key = raw_input("Enter encryption key: ") # requests int input from user and sets it equal to key
    print(encrypt(message, key)) # calls encrypt() and passes message and key and prints final result

if __name__ == "__main__":
    main()
