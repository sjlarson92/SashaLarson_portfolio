import chapters
import User
# DUE 8/26 THIS MUST BE FULLY OOP FUNCTIONAL, TAKE IN AS MANY USERS AS NEEDED, EACH USER HAS OWN OBJECT, AND EACH USER CAN MAKE OWN SEPARATE DECISIONS
# NO LONGER WANT TO HARD CODE ANYTHING, IN THE MAIN.PY BUT RETURNS ARE OK FOR JUMPING CHAPTERS
def main():

    #intro()
    # ch0Choice = ch0() #call ch0() and sets the returned result to ch0Choice
    # ch1Choice = chapters.chapterPlot('1', ch0Choice) # calls ch1() passing in the parameter of ch0Choice from ch0() return and sets the returned result equal to ch1Choice
    # ch2Choice = chapters.chapterPlot('2', ch1Choice) # calls ch2() passing in the Ch1Choice parameter from ch1() return ann sets the returned result equal to ch2Choice
    # ch3Choice = chapters.chapterPlot('3', ch2Choice)
    # ch4Choice = chapters.chapterPlot('4', ch3Choice)
    # ch5Choice = chapters.chapterPlot('5', ch4Choice)
    # ch6Choice = chapters.chapterPlot('6', ch5Choice)
    # ch7Choice = chapters.chapterPlot('7', ch6Choice)
    # ch8Choice = chapters.chapterPlot('8', ch7Choice)
    # ch9Choice = chapters.chapterPlot('9', ch8Choice)
    # chapters.chapterPlot('10', ch9Choice)

def intro():

    introduction = """Welcome to Zombieland!
    How many players are there?"""
    print(introduction) #prints the variable introduction
    numPlayers = input() # request input from user and sets the input equal to the variable numPlayers
    print("What's your name?")
    userName = raw_input("What's your name?")
    print('Lets begin ' + userName + '!') # prints the string plus a variable plus another string
    

def ch0():

    print(chapters.chapter0plot) # prints the chapter0plot variable under the text class

    chChoice = raw_input() # request user input and sets it equal to chChoice

    y = checkAnswer(chChoice) # call the checkAnswer() passing in the chChoice parameter and set it equal to the variable y

    return(y) # this is returning the variable y to the main function

# def chSelector(x, chapterNumber): # defines ch1() and request one parameter (x)
#
#     if (x == 'a'): # if statement for the parameter being passed in to equal the string 'a'
#         chapters.chapterplot(x, chapterNumber)
#     elif (x == 'b'):
#         print(chapters.chapter1Bplot)
#     else:
#         print("Validation is broken")
#
#     chChoice = raw_input()
#     y = checkAnswer(chChoice)
#     return(y)

# def ch2(x):
#     if (x == 'a'):
#         print(chapters.chapter2Aplot)
#     elif (x == 'b'):
#         print(chapters.chapter2Bplot)
#     else:
#         print("Validation is broken")
#
#     chChoice = raw_input()
#     y = checkAnswer(chChoice)
#     return(y)
#
#
# def ch3(x, chapterNumber):
#     if (x == 'a'):
#         print(chapters.chapterAplot)
#     elif (x == 'b'):
#         print(chapters.chapter3Bplot)
#     else:
#         print("Validation is broken")
#
#     chChoice = raw_input()
#     y = checkAnswer(chChoice)
#     return(y)
#
#
#
#










def checkAnswer(x):
    if (x == 'a' or x == 'A'):
        x = 'a'
    elif (x == 'b' or x == 'B'):
        x = 'b'
    else:
        x = "This is not an option. I need to loop this!"
    return x

if __name__ == "__main__":
    main()



#
# outgoing_variable = input()
#
# if (outgoing_variable % 2 == 0):
#     outgoing_variable = 'even'
# elif (outgoing_variable % 2 == 1):
#     outgoing_variable = 'odd'
# else:
#     outgoing_variable = "user is dumb Error"
#
# def example(incoming_variable):
#     createdVariable = (incoming_variable + '!')
#     print("hi")
#     print(incoming_variable)
#     return(createdVariable)
#
# requestVariable = example(outgoing_variable)
# print(requestVariable)
