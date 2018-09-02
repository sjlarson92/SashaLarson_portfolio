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

if __name__ == '__main__':
    main()
