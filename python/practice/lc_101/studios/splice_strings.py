# def get_country_codes(prices):
#     # your code here
#
#
# # don't include these tests in Vocareum
# from test import testEqual
#
# testEqual(get_country_codes("NZ$300, KR$1200, DK$5"), "NZ, KR, DK")
# testEqual(get_country_codes("US$40, AU$89, JP$200"), "US, AU, JP")
# testEqual(get_country_codes("AU$23, NG$900, MX$200, BG$790, ES$2"), "AU, NG, MX, BG, ES")
# testEqual(get_country_codes("CA$40"), "CA")
#
# problem
#
# Write a function that will return a string of country codes from an argument that is a string of prices (containing dollar amounts following the country codes). Your function will take as an argument a string of prices like the following: "US$40, AU$89, JP$200". In this example, the function would return the string "US, AU, JP".
#
# Hint: You may want to break the original string into a list, manipulate the individual elements, then make it into a string again.
#
# step by step
# split string at every '$'
# run through list with for loop
# extract the [0] and [1] and create a new list with these
#
#
# solution

money = "NZ$300, KR$1200, DK$5"

def get_country_codes(prices):
    codes = []
    arr = prices.split(", ")
    for i in range(len(arr)):
        codes.append(arr[i][:arr[i].index('$')])
    codes = ','.join(codes)
    return codes

get_country_codes(money)
