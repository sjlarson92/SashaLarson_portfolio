import chapters # imports chapters file
import User # imports User file

# DUE 8/26 THIS MUST BE FULLY OOP FUNCTIONAL, TAKE IN AS MANY USERS AS NEEDED, EACH USER HAS OWN OBJECT, AND EACH USER CAN MAKE OWN SEPARATE DECISIONS
# NO LONGER WANT TO HARD CODE ANYTHING, IN THE MAIN.PY BUT RETURNS ARE OK FOR JUMPING CHAPTERS


def main(): # defines main()
    #print("main()")
    intro() # calls intro()

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

def intro(): # defines intro()

    introduction = "Welcome to Zombieland!" #assigns string to variable
    print(introduction) #prints the variable introduction
    numPlayers = input("How many players are there? ") #request input from user and sets the input equal to the variable numPlayers
    userName = raw_input("What's your name? ") # requests raw_input(string) from user and assigns to variable
    print("Let's begin " + userName + "!") # prints the string plus a variable plus another string

def ch0(): # defines ch0()

    print(chapters.chapter0plot) # prints the chapter0plot variable under the text class

    chChoice = raw_input() # request user input and sets it equal to chChoice

    y = checkAnswer(chChoice) # call the checkAnswer() passing in the chChoice parameter and set it equal to the variable y

    return(y) # this is returning the variable y to the main function

def checkAnswer(x): # defines checkAnswer() and accepts the parameter, locally known as 'x'
    if (x == 'a' or x == 'A'): # if statement that will run if boolean is true
        x = 'a' # this assigns string 'a' to the variable x
    elif (x == 'b' or x == 'B'): #elif statement that will run if boolean is true
        x = 'b' # this assigns the string 'b' to the variable x
    else: # else statement that will run if neither if or elif statement are true
        x = "This is not an option. I need to loop this!" # this assigns string to variable x
    return x # this returns the local variable x to the whatever called the checkAnswer()

if __name__ == "__main__": # if statement that determines if file is the main file and runs the indented code if true
    print("hello")
    main() # calls the main()
