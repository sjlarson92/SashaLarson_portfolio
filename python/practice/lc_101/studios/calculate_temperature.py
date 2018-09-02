#You have a thermostat that allows you to set the room to any temperature between 40 and 89 degrees.

# The thermostat can be adjusted by turning a circular dial.
# For instance, if the temperature is set to 50 degrees and you turn the dial 10 clicks toward the left,
# you will set the temperature to 40 degrees. But if you keep turning 1 click to the left (represented as -1) it will circle back around to 89 degrees. If you are at 40 degrees and turn to the right by one click, you will get 41 degrees. As you continue to turn to the right, the temperature goes up, and the temperature gets closer and closer to 89 degrees. But as soon as you complete one full rotation (50 clicks), the temperature cycles back around to 40 degrees.
#
# Write a program that calculates the temperature based on how much the dial has been turned. The number of clicks (from the starting point of 40 degrees) is contained in a variable. You should print the current temperature for each given click variable so that your output is as follows:

# 
# problem
#
# what is the temperature relevant to the dial turn?
#     1.what is the starting point?
#     2.how many clicks is it turning?
#     3.how do you solve for the new temp?
#         how do i make sure that the new temp stay in the range of 40-89?
#         3.1what if the temp goes over 89?
#
#         3.2what if the temp goes below 40?
#
#     4.what is the new temp?
#
#
# step by step
#
# 1. set starting point equal to 40
# 2. set click variable equal to designated value 0
# sol 3)
#     click variable%50       0
#     take result and add to starting point 40
#
# 3. add click value to starting point 130
# 3.1
# sol 1)subtract 50
# sol 2)% 50
#
#
#
# 4. print new temperature 89
#
# solution test

starting_point = 40
click_1 = 0
new_temp = (click_1 % 50) + starting_point
print('The temperature is ', new_temp)
