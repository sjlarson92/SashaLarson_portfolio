class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def get_area(self):
        area = self.length * self.width
        return area

    def get_perimeter(self):
        perimeter = (self.length * 2) + (self.width * 2)
        return perimeter

    def is_square(self):
        if (self.length == self.width):
            return True
        else:
            return False

    def compare_area(self, other_rectangle):
        if self.get_area() > other_rectangle.get_area():
            return("The first is bigger")
        elif self.get_area() < other_rectangle.get_area():
            return("No, it is smaller")
        else:
            return("They are the same size")

square = Rectangle(9,10)

rectangle = Rectangle(10,10)

print(square.compare_area(rectangle))
