class Student:
    def __init__(self, name, id):
        self.name = name
        self.id = id
        self.credits = 0
        self.gpa = 0
        self.year = 'Freshman'

    def get_gpa(self, credit_hours, grade): #how do i convert letter grade to number value? use dictionary?
        value = {
            A:4.0
            B:3.0
            C:2.0
            D:1.0
            F:0
            }
        self.gpa = credit_hours * grade

#GPA Formula grades*credits/credits = gpa
