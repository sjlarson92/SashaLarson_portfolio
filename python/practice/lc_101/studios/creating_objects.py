1.2 class Studio 1

Problem
1. How do I create two or more turtles
2. How do I move them across the screen (left to right)?
3. How do I randomize the distance each turtle travel?



Step by Step

1. Import the modules we need
    Create a screen
    Create two turtles

2. Move the turtles to their starting positions

3. Send them racing across the screen

Solution

import turtle              # 1. import the modules/ modules give you accesss to predefined code
import random
wn = turtle.Screen()       # 2. Create a screen
wn.bgcolor('lightblue')

speedy_Gonzales = turtle.Turtle()    # 3. Create two turtles
slow_Poco = turtle.Turtle()
speedy_Gonzales.color('red')
slow_Poco.color('blue')
speedy_Gonzales.shape('turtle')
slow_Poco.shape('turtle')

speedy_Gonzales.up()                  # 4. Move the turtles to their starting point
slow_Poco.up()
slow_Poco.goto(-100,20)
speedy_Gonzales.goto(-100,-20)

# your code goes here

speedy_Gonzales.down()
slow_Poco.down()

speedy_Gonzales.distance = random.randrange(0,101)
slow_Poco.distance = random.randrange(0,101)

speedy_Gonzales.forward(speedy_Gonzales.distance)
slow_Poco.forward(slow_Poco.distance)

wn.exitonclick()
