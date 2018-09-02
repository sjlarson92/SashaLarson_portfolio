Problem

The `Fibonacci sequence<https://en.wikipedia.org/wiki/Fibonacci_number>`_ is given as:
0, 1, 1, 2, 3, 5, 8, 13, 21...

Notice that each number in the series is simply the sum of the previous two numbers of the series. Write a function called fib(n) that takes in an integer n which is greater than 2 and returns the nth Fibonacci number. For example fib(4) would return 3, fib(6) would return 8 etc. (Hint: Remember that zero-based indexing we talked about...)

Note that it is tricky to compute fib(0) = 0 and fib(1) = 1 with the concepts we have currently covered. If you have done the prep work for chapter 6, however, you should be able to update your function to cover those two values.

Finally, investigate the following question: what is the largest value of n that returns the correct Fibonacci number? Why does this function stop working after that point?

**I need to find the value of the number in the nth index place
F(n) = F(n-1)+F(n-2)


Step by step
How do I save the fibonnaci numbers
How do i solve for the fibonnaci number
how do I find the number from the fibonacci by their index number

fib(2) = 1
fib(3) = 2
fib(4) = 3

0 , 1,
Solution

def fib(n):
    num = 0
    *add second variable = 1
    for i in range(n):
        num = (num) + (num + 1)
