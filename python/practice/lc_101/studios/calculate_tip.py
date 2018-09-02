subtotal = input(" how much was dinner?")
subtotal = float(subtotal)
# this will cast the variable to a float

tip_percent = input('tip %')
#this prompts user to choose tip percent value

tip_percent = float(tip_percent)
tip_percent = (tip_percent)/100

# this will cast the variable tip_percent as a float

tip = (subtotal*tip_percent)

print("you should tip your server this much: ", tip)
# this print out the statement above and then the tip that was solved for


_____________
Day you leave: Day 2, Tuesday
Lenght of Vacation: 10

What is the day you come back? Day 5, Friday

SOlution 1: Add both days together.(2 + 10)
            Save their total (12)
            Modules their total by the number of days in a week (12/7 = 1, remainder = 5)

Donuts

What is the problem?
 Donut calculator
1. how many donuts do they want?
2. How much do you want to pay per donut?
3. How much will the total be after 5% tax?
4. How much should we suggest them to pay?



Step by step computer thinking

1. Prmpt user for number of donts they want
2. prompt user for how much they want to pay per donut
    4.print string suggesting price
3. calculate total cost of Donuts
    calculate the tax of 5% from the total
    add tax to total
    print total + tax to user

solution test
1.  2
2. $10
    4. suggest paying $4 per donut
3. 2 * 10 = $20 cost of Donuts
    tax = 20 * .05 = 1
    total = 20 + 1 = 21
    print $21
