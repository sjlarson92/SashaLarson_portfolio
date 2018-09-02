class Fraction:
    def __init__(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator

    def get_sum(self, other_fraction):
        if self.denominator == other_fraction.denominator:
            new_num = self.numerator + other_fraction.numerator
            fraction_sum = (new_num, self.denominator)
            return fraction_sum
        else:
            first_frac = [(self.numerator * other_fraction.denominator), (self.denominator * other_fraction.denominator)]
            second_frac = [(other_fraction.numerator * self.denominator), (other_fraction.denominator * self.denominator)]
            new_frac = (first_frac[0] + second_frac[0]), (first_frac[1])
            return new_frac

    def get_product(self, other_fraction):
        product = (self.numerator * other_fraction.numerator), (self.denominator * other_fraction.denominator)
        return product

    def get_reciprocal(self):
        return(self.denominator, self.numerator)

    def simplify(self):
        if self.denominator % self.numerator == 0:
            simple_frac = (self.numerator/self.numerator), (self.denominator/self.numerator)
            return simple_frac
        elif self.numerator % self.denominator == 0:
            simple_frac = (self.numerator/self.denominator), (self.denominator/self.denominator)
            return simple_frac
        else:
            return "This fraction cannot be simplified"

first = Fraction(7, 5)

second = Fraction(2, 2)

print(first.simplify())
