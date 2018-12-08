import numpy as np
import random
from pprint import pprint
 
dice = []

def dice_display():
	pprint(dice)

def rollagain(dice):
	print 'Enter the dice indexes you want to roll again seperated by a comma:'
	i = raw_input()
	new_i = [ int(k) for k in i.split(",")]
	new_i = np.array(new_i) - 1
	for index in new_i:
	    dice[index] = np.random.randint(1,7)
	dice

def score(dice):
	score = sum(dice)

def main():
	for i in range(5):
		dice.append(random.randint(1,6))
	dice_display()
	print 'Press z to keep the score or c to continue'
	choice = raw_input()
	if choice == 'c':
		rollagain(dice)
		dice_display()
		print 'Press z to keep the score or c to continue'
		choice = raw_input()
		if choice == 'c':
			rollagain(dice)
			dice_display()
		elif choice == 'z':
			score(dice)

	elif choice == 'z':
		score(dice)


def options(dice):
	if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
	    print "YAHTZEE!"

	#     #Four of a kind roll possibilites
	if dice[0] == dice [1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You have four of a kind"

	elif dice[0] != dice[1] and dice[1] == dice[2] and dice[1] == dice[3] and dice[1] == dice[4]:
		print "You have three of a kind"

	#Three of a kind possibilites
	
	if dice[0] == dice [1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
		print "You have three of a kind"

	if dice[0] != dice [1] and dice[1] == dice[2] and dice[1] == dice[3] and dice[0] != dice[4]:
		print "You have three of a kind"	
		

	if dice[0] != dice[4] and dice[1] == dice[2] and dice[1] == dice[3] and dice[0] == dice[4]:
		print "You have three of a kind"

	if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
	    print "You have three of a kind"

	if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You have three of a kind"

	if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
	    print "You have three of a kind"

	if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You have three of a kind"

	if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
	    print "You have three of a kind"

	if dice[4] == dice[3] and dice[4] == dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
	    print "You have three of a kind"

	if dice[4] == dice[3] and dice[4] != dice[2] and dice[4] == dice[1] and dice[4] != dice[0]:
	    print "You have three of a kind"

	if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] == dice[3] and dice[1] != dice[4]:
	    print "You have three of a kind"

	if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] != dice[3] and dice[1] == dice[4]:
	    print "You have three of a kind"
	#Pair roll possibilites
	if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
	    print "You hava a pair"

	if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
	    print "You hava a pair"

	if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
	    print "You hava a pair"

	if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
	    print "You hava a pair"

	if dice[0] != dice[1] and dice[1] != dice[2] and dice[1] != dice[3] and dice[1] == dice[4]:
	    print "You hava a pair"

	if dice[4] != dice[3] and dice[4] == dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
	    print "You hava a pair"

	if dice[4] == dice[3] and dice[4] != dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
	    print "You hava a pair"

	if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] != dice[3] and dice[1] != dice[4]:
	    print "You hava a pair"

	if dice[4] != dice[3] and dice[3] == dice[2] and dice[3] != dice[1] and dice[3] != dice[0]:
	    print "You hava a pair"

	if dice[0] != dice[1] and dice[1] != dice[2] and dice[1] == dice[3] and dice[1] != dice[4]:
	    print "You hava a pair"

	#Straight rolls possibilites
	#there are only 5 dice so you need to write it all out... damn it
#########################################	
	straight = [1, 2, 3, 4, 5]
	if new ==straight:
	    print "You have a straight"
	k=0
	#Fullhouse
	if new[0] == new[1] and new[0] == new[2]:
	    k=1
	if new[3] == new[4] and k==1:
	    print "Fullhouse"

	if new[2] == new[3] and new[2] == new[4]:
	    k=1
	if new[0] == new[1] and k==1:
	    print "Fullhouse"

def bubblesort(dice):
    a = dice
    for i in range(0, len(a) - 1):
	for j in range(0, len(a) - 1 - i):
	    if a[j] > a[j+1]:
	        a[j], a[j+1] = a[j+1], a[j]
    return a
	new = bubblesort(dice)

if __name__ == '__main__':
    main()
