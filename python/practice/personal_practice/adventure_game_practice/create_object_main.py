# 1. initialize from create_object.py class
# 2. print object from main
# NEED TO FIND A WAY TO FOR LOOP INPUT AND SAVE TO DIFFERENT OBJECTS AND NOT CREATE DUPLICATES
import create_object # imports create_object class
import text #imports text file

# print("this is main")
# userName = raw_input("What is your name? ")
# userAge = input("how old are you? ")
# userHeight = input("how tall are you? ")

# user1 = create_object.Example(userName, userAge, userHeight)
users = [] # user list
players = {} # players dictionary


numPlayers = input("how many players are there? ")# this request user input of an int and set the value equal to the variable numPlayers

for x in range(numPlayers): # this for loop iterates for the number of the range of numPlayers
    user = raw_input("Enter username for Player %s: " % (x + 1)) # this requests user input of a string(want username) and sets it equal to user
    users.append(user) # this adds the variable user to the end of the users list

#print users

for x in users: # will loop for each item in the users list
    players[x] = create_object.Player(x) # this creates an object by calling the Player() in the create_object files and sets it equal to the key term(players[x]) in the players dictionary


for y in players:
    while players[y].life == True: # while loop. while player attribute life is true(alive)
        for i in players: # for loop that iterates through each player in game
            current_player = players[i].get_name() # this calls the get_name() from players class of the player[i] and sets the name equal to current_player
            player_choice = players[i].get_choice() # calls get_choice() from players class of player[i] and sets it equal to player_choice
            chapter = players[i].get_chapter() # calls get_chapter() from players class of player[i] and sets it equal to chapter

            current_chapter = (str(chapter) + str(player_choice)) #caste variables chapter and player_choice to strings and concatinates both and sets it equal to current_chapter
            #print current_chapter
            print(current_player + ": ") #this prints the current_player (players name)
            print(text.chapters[current_chapter]) # prints current_chapter by using chapters() from text file
            if current_chapter == '1a' or current_chapter == '2b': # if statement that determines if the current chapter is equal to a dead end chapter(where the player will die)
                print("Player: " + current_player + " has died. GAME OVER!") # prints player name and lets them know that they have died
                players[i].kill_player() # calls kill_player() of players[i] which sets their life attribute to false and kills them as the while loop will not see them anymore

            else: # this runs if the player is still alive
                players[i].set_choice(raw_input("Choose a or b: ")) # requests string input from user and sets it equal to their choice of that player
                chapter = players[i].next_chapter() # calls the next chapter() that =+1 and sets the new value equal to chapter which will take player to next chapter
#

# Below code test class methods on player objects:

# for i in players:# for each item in players loop
#     print(players[i].get_name(), players[i].get_choice())# this will print the name and choice of each object in the players dictionary
#
#     # players[i].choice = raw_input("user %s new choice: " % i)
#     players[i].set_choice(raw_input("user %s new choice: " % i))
#
#
#     print("user %s new choice is: %s" % (i, players[i].get_choice()))
#     print(' -------------')
# # for i in players:
#     print(players[i].name)


#

















# players = []
# playerNum = input("how many players are there? ")
# i = 0
# while i < playerNum:
#     userName = raw_input("What is your name? ")
#     userAge = input("how old are you? ")
#     userHeight = input("how tall are you? ")
#     players.append.create_object.Example(userName[0], userAge[1], userHeight[2])
#     i = i + 1
#     print(players[0])

    #create_object.Example(userName, userAge,userHeight)

    # user = 0
    # user = user + i
    # userName = raw_input("What is your name? ") #
    # userAge = input("how old are you? ")
    # userHeight = input("how tall are you? ")
    # user = create_object.Example(userName, userAge,userHeight)

# userName = raw_input("What is your name? ")
# userAge = input("how old are you? ")
# userHeight = input("how tall are you? ")
#
# user2 = create_object.Example(userName, userAge, userHeight)
# print
#
# print(user1.name) # this prints the attribute name of the object user1
# print(user1.age)
# print(user1.year_born())
# print(user1.how_tall())
#
# print(user2.name) # this prints the attribute name of the object user1
# print(user2.age)
# print(user2.year_born())
# print(user2.how_tall())


#Pseudocode
#how do i create object and save them while incrementing the variable?
#need to create a for loop for num of players and then save instance of object to variable

#ask user how many players there are and set this equal to a variable (numPlayers)
