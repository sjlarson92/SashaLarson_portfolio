import User
import storyline

def main():
    beginning_players = setUpGame()
    #print beginning_players
    living_players = get_live_players(beginning_players)

    while living_players:

        gameEngine(living_players)
        living_players = get_live_players(living_players)

    print("\n All Players are dead. Game Over. \n ")
def setUpGame(): # defines player_info function
    users = [] # users list
    players = {} # players dictionary
    num_of_players = input("\n How many players are there? " ) # this request user input of an int and set the value equal to the variable numPlayers

    for x in range(num_of_players): # this for loop iterates for the number of the range of numPlayers
        user_name = raw_input("\n Enter username for Player %s: " % (x + 1)) # this requests user input of a string(want username) and sets it equal to user
        users.append(user_name) # this adds the variable user to the end of the users list

    for x in users: # will loop for each item in the users list
        players[x] = User.Player(x) # this creates an object by calling the Player() in the create_object files and sets it equal to the key term(players[x]) in the players dictionary

    print('------------------------------------------')
    print("Let the Game Begin!")

    return players

def get_live_players(players):
    live_players = {}
    for a in players:
        #print a
        if players[a].life == True:
            #print('hello')
            live_players[a] = players[a]
    #print(live_players)
    return live_players

def gameEngine(players):
    for i in players: # for loop that iterates through each player in game
        #print("this is the second for loop in game engine")
        current_player = players[i].get_name() # this calls the get_name() from players class of the player[i] and sets the name equal to current_player
        player_choice = players[i].get_choice() # calls get_choice() from players class of player[i] and sets it equal to player_choice
        chapter = players[i].get_chapter() # calls get_chapter() from players class of player[i] and sets it equal to chapter
        current_chapter = (str(chapter) + str(player_choice)) #caste variables chapter and player_choice to strings and concatinates both and sets it equal to current_chapter

        #if players[i].life == False:
        #    print('')
        if current_chapter == '2b' or current_chapter == '7b' or current_chapter == '10a' or current_chapter == '10b':  # if statement that determines if the current chapter is equal to a dead end chapter(where the player will die)
            print(current_player + ': ')
            print storyline.chapters[current_chapter] # prints current_chapter by using chapters() from text file
            print(current_player + " has died. ") # prints player name and lets them know that they have died
            players[i].kill_player() # calls kill_player() of players[i] which sets their life attribute to false and kills them as the while loop will not see them anymore
            #players[i].check_life()
        else: # this runs if the player is still alive
            print(current_player + ': ')
            print storyline.chapters[current_chapter] # prints current_chapter by using chapters() from text file
            players[i].set_choice(raw_input(">>>>>>> " + current_player + " please choose a or b: ")) # requests string input from user and sets it equal to their choice of that player
            chapter = players[i].next_chapter() # calls the next chapter() that =+1 and sets the new value equal to chapter which will take player to next chapter
    print('------------------------------------------')

if __name__ == "__main__":
    main()
