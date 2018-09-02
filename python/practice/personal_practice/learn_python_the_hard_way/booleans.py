x = "There are %d types of people." % 10
binary = "binary"
do_not = "don't"
y = "Those who know %s and those who %s." % (binary, do_not)

print x
print y

print "I said %r." % x
print "I also said: '%s'." % y

hilarious = False
joke_evaluation = "Isn't that joke so funny?! %r"
#why is there a %r? what does it do?
#there is and error if I remove %r, but I don't understand why
#%r is simply a variable used to lead to hilarious = False
#can also be written by removing %r and replacing % in 18 with comma
print joke_evaluation % hilarious

w = "This is the left side of ..."
e = "a string with a right side."

print w + e
