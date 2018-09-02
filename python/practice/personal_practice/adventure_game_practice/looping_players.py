# check if any players are alive (check all players using a for loop)
# if the player is alive add player to the alive players list
# if there are no players in the alive players list then print end game
# else return the alive players list
#
# go through alive player list adn print chapter
# ask for user input/choice after printing chapter



def check_life(players):
    alive_players = []

    for i in players:
        if i == "player 1":
            print('%s is dead' % i)
        else:
            alive_players.append(i)

    if alive_players == []: # checks if the list is empty/if all the players are dead
        print 'game over'
    else:
        return alive_players

def chapters(still_alive):
    for i in still_alive:
        print ('%s is in chapter 0' % i)
        # choice = raw_input(" %s choice: " % i)
    still_alive[-1] = "player 1"
    return still_alive

players = ["player 1", "player 2", "player 3"]
still_alive = check_life(players)

while still_alive:
    new_list = chapters(still_alive)
    still_alive = check_life(new_list)
    print(' ---------------')

print ' game is now over, after while loop'
