#internet testing
import random
002

003
dice = 0
004
threeofkind = 0
005
fourofkind = 0
006
fullhouse = 0
007
yahtzee = 0
008
sstraight = 0
009
lstraight = 0
010
misc = 0
011

012

013
def roll_dice():
014
    '''Returns 5 randomly rolled dice.'''
015
    dice = []
016
    for i in range(5):
017
        dice += [random.randint(1,6)]
018
        dice = sorted(dice)
019
        dice2 = set(dice)
020

021
    return dice
022

023

024

025

026

027

028
def three_of_a_kind(dice):
029
    '''Returns True or False if the dice are three of a kind.'''
030
    if len(dice2) == 3:
031
        threeofkind += 1
032
    else:
033
        pass
034

035
def four_of_a_kind(dice):
036
    ''' Returns True or False if the dice are four of a kind. '''
037
    if dice[0] == dice[-1]:
038
        pass
039

040
    elif len(dice2) == 2:
041
        if dice[0] == dice[1]:
042

043

044

045

046
            fourofkind += 1
047

048

049
    else:
050
        pass
051

052
def full_house(dice):
053
    '''Returns True of False if the dice are a full house.'''
054
    if len(dice2) == 2:
055
        if dice[0] == dice[1]:
056

057

058

059
            fullhouse += 1
060
        elif dice[-1] == dice[-2]:
061
            fullhouse += 1
062

063
    else:
064
        pass
065

066
def small_straight(dice):
067
    if dice == (1,2,3,4,5):
068
        sstraight += 1
069
    else:
070
        pass
071

072

073
def large_straight(dice):
074
    ''' Returns True or False if the dice represent a large straight. '''
075

076
    if dice == (2,3,4,5,6):
077
        lstraight += 1
078
    else:
079
        pass
080

081
def yahtzee(dice):
082
    ''' Returns True or False if the dice represent Yahtzee'''
083
    if len(dice2) == 1:
084
        yahtzee += 1
085
    else:
086
        pass
087
def misc(dice):
088
    if len(dice2) == 5 or 4:
089
        misc += 1
090
    else:
091
        pass
092

093

094
def main():
095
    total_rolls = 0.0
096
    num_experiments=int(raw_input("Dice rolls: "))
097

098
    for i in range(num_experiments):
099
        roll_dice()
100

101

102

103

104

105

106
        three_of_a_kind(dice)
107
        four_of_a_kind(dice)
108
        full_house(dice)
109
        small_straight(dice)
110
        large_straight(dice)
111
        yahtzee(dice)
112
        misc(dice)
113

114

115

116
    yahtzeepre = yahtzee/total_rolls * 100
117
    fourofkindpre = fourofkind/total_rolls * 100
118
    lstraightpre = lstraight/total_rolls * 100
119
    sstraightpre = sstraight/total_rolls * 100
120
    fullhousepre = fullhouse/total_rolls * 100
121
    threeofkindpre = threeofkind/total_rolls * 100
122
    miscpre = misc/total_rolls *100
123

124
    print "Dice rolls: ", + total_rolls
125
    print "Yahtzee: ", + yahtzeepre, + "%"
126
    print "Four of a kind (but not Yahtzee): ", + fourofkindpre,+ "%"
127
    print "Large straight: ", + lstraightpre , + "%"
128
    print "Small straight (but not large straight): ", + sstraightpre , + "%"
129
    print "Full house (but not three of a kind): ", + fullhousepre, + "%"
130
    print "Three of a kind (but not four of a kind, full house, or Yahtzee): ", + threeofkindpre, + "%"
131
    print "Misc. (not any of the above): ", + miscpre,+ "%"
132

133
    return
134

135

136
main()
