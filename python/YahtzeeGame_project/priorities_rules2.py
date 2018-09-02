import random

usr = ''
scr = ''
#dice_design  = [1,2 ,3 ,4 ,5 ,6]
i= 1
#maxlength = 5
dice = []
diceMaxLength = 5

dice_count=3

#roll the dice

print "Hello user, Chance 1"  # YAY THIS WORKS
# print "Enter R or r to roll"
# usr = raw_input()
#if usr == 'R' or  usr == 'r':
def rand():
    for i in range(5):
        dice.append(random.randint(1,6))
    print dice

rand()

#dice = [4, 5, 4, 4, 5] #this is a tester
#print dice
#If Statements:g
#Yahtzee
if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
    print "YAHTZEE!"
    winnerIndex = 50
#     #Four of a kind roll possibilites

if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
    print "You have four of a kind"
    winnerIndex = dice[0] + dice[1] + dice[2] + dice[3]

if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
    print "You have four of a kind"
    winnerIndex = dice[0] + dice[1] + dice[2] + dice[4]

if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
    print "You have four of a kind"
    winnerIndex = dice[0] + dice[1] + dice[4] + dice[3]
    #print winnerIndex

if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
    print "You have four of a kind"
    winnerIndex = dice[0] + dice[4] + dice[2] + dice[3]
    #print winnerIndex

if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] == dice[3] and dice[1] == dice[4]:
    print "You have four of a kind"
    winnerIndex = dice[4] + dice[1] + dice[2] + dice[3]
    #print winnerIndex

#Three of a kind possibilites
if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] == dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[0] + dice[3] + dice[4]
    #print winnerIndex

if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[0] + dice[2] + dice[4]
    #print winnerIndex

if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[0] + dice[2] + dice[3]
    #print winnerIndex

if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[0] + dice[1] + dice[4]
    #print winnerIndex

if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[0] + dice[1] + dice[3]
    #print winnerIndex

if dice[0] == dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[0] + dice[1] + dice[2]
    #print winnerIndex

if dice[4] == dice[3] and dice[4] == dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
    print "You have three of a kind"
    winnerIndex = dice[4] + dice[2] + dice[3]
    #print winnerIndex

if dice[4] == dice[3] and dice[4] != dice[2] and dice[4] == dice[1] and dice[4] != dice[0]:
    print "You have three of a kind"
    winnerIndex = dice[4] + dice[1] + dice[3]
    #print winnerIndex

if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] == dice[3] and dice[1] != dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[1] + dice[2] + dice[3]
    #print winnerIndex

if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] != dice[3] and dice[1] == dice[4]:
    print "You have three of a kind"
    winnerIndex = dice[1] + dice[2] + dice[4]
    #print winnerIndex

#Pair roll possibilites
if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] == dice[4]:
    print "You have a pair"
    winnerIndex = dice[0] + dice[2]
    #print winnerIndex

if dice[0] == dice[1] and dice[0] != dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
    print "You have a pair"
    winnerIndex = dice[0] + dice[1]
    #print winnerIndex

if dice[0] != dice[1] and dice[0] == dice[2] and dice[0] != dice[3] and dice[0] != dice[4]:
    print "You have a pair"
    winnerIndex = dice[0] + dice[2]
    #print winnerIndex

if dice[0] != dice[1] and dice[0] != dice[2] and dice[0] == dice[3] and dice[0] != dice[4]:
    print "You have a pair"
    winnerIndex = dice[0] + dice[3]
    #print winnerIndex
if dice[0] != dice[1] and dice[1] != dice[2] and dice[1] != dice[3] and dice[1] == dice[4]:
    print "You have a pair"
    winnerIndex = dice[1] + dice[4]
    #print winnerIndex
if dice[4] != dice[3] and dice[4] == dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
    print "You have a pair"
    winnerIndex = dice[4] + dice[2]
    #print winnerIndex

if dice[4] == dice[3] and dice[4] != dice[2] and dice[4] != dice[1] and dice[4] != dice[0]:
    print "You have a pair"
    winnerIndex = dice[4] + dice[3]
    #print winnerIndex

if dice[0] != dice[1] and dice[1] == dice[2] and dice[1] != dice[3] and dice[1] != dice[4]:
    print "You have a pair"
    winnerIndex = dice[1] + dice[2]
    #print winnerIndex

if dice[4] != dice[3] and dice[3] == dice[2] and dice[3] != dice[1] and dice[3] != dice[0]:
    print "You have a pair"
    winnerIndex = dice[3] + dice[2]
    #print winnerIndex

if dice[0] != dice[1] and dice[1] != dice[2] and dice[1] == dice[3] and dice[1] != dice[4]:
    print "You have a pair"
    winnerIndex = dice[1] + dice[3]
    #print winnerIndex

#Straight rolls possibilites
#there are only 5 die so you need to write it all out... damn it
def bubblesort(dice):
    a = dice
    for i in range(0, len(a) - 1):
        for j in range(0, len(a) - 1 - i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
    return a
new = bubblesort(dice)
straight = [1, 2, 3, 4, 5]
if new ==straight:
    print "You have a straight"
    winnerIndex = 20
    #print winnerIndex

k=0
#Fullhouse
if new[0] == new[1] and new[0] == new[2] and new[3]== new[4] and new[0]!=new[3]:
    print "Fullhouse"
    winnerIndex = new[0] + new[1] + new[2] + new[3] + new[4]
    print winnerIndex

elif new[2] == new[3] and new[2] == new[4]:
    k=1
if new[0] == new[1] and k==1 and new[0] != new[3]:
    #print "Fullhouse"
    winnerIndex = new[0] + new[1] + new[2] + new[3] + new[4]
    #print winnerIndex
