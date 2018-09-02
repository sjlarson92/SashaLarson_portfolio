Create a Car class that has the following characteristics:

It has a gas_level attribute.
It has a constructor (__init__ method) that takes a float representing the initial gas level and sets the gas level of the car to this value.
It has an add_gas method that takes a single float value and adds this amount to the current value of the gas_level attribute.
It has a fill_up method that sets the car’s gas level up to 13.0 by adding the amount of gas necessary to reach this level. It will return a float of the amount of gas that had to be added to the car to get the gas level up to 13.0. However, if the car’s gas level was greater than or equal to 13.0 to begin with, then it doesn’t need to add anything and it simply returns a 0.
(Note: you can call the add_gas method from within the fill_up method by using this syntax: self.add_gas(amount).)

Here’s an example.

example_car = Car(9)
print(example_car.fill_up())  # should print 4

another_car = Car(18)
print(another_car.fill_up()) # should print 0

class Car:
    def __init__(self, gas_level):
        self.gas_level = gas_level

    def add_gas(self, gas_added):
        self.gas_level = self.gas_level + gas_added

    def fill_up(self):
        if self.gas_level >= 13.0:
            return 0
        elif self.gas_level < 13.0:
            gas_needed = 13 - self.gas_level
            return gas_needed
