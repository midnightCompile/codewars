# Exercise: Complete the solution so that it reverses all of the words within
# the string passed in.
#
# There are numerous ways to solve this problem, some of which will be 
# demonstrated below; this file is a work in progress.



# ****Solution 1: For Loop

def reverse_str_one(str):
    words = str.split()
    backwards = ""
    for word in words:
        for c in reversed(word):
            backwards += c
        backwards += " "
    return backwards


# Solution 2: While Loop

def reverse_string_two(str):
    string = ""
    length = len(str) - 1
    while length > 0:
        string = string + str[length]
        length -= 1
    return string



# Solution 3: Recursion

def reverse_string_three(str):
    if len(str) == 0:
        return str
    else:
        return reverse_string_three(str[1:]) + str[0]



# Solution 4: Reverese Iteration Using reversed() and str.join()

def reverse_string_four(str):
    return "".join(reversed(str))

# Notes: reversed() is a built-in method allowing reverse iteration over an
# iterator in reverse order of its elements. This doesn't modify the original 
# string, but provides a view of the reverse order.
#
# The str.join() method is then used to merge all of the characters resulting
# from the reversed iteration into a new string, which gets returned.



# Solution 5: Using Slicing

def reverse_string_five(str):
    return str[::-1]

# Notes: strings follow the sequence protocal, and all sequences support a 
# feature called slicing. 
# 
# Essentially, slicing takes advantage of a "step" field, which is typically
# notated as [start,stop,step]. Omitting values for start and stop indicates
# default values of 0 and string length, respectively. Setting step to -1 
# denotes starting from the end and stopping at the start.
#
# This creates a special case wherein slicing a sequence with [::-1] produces 
# a reversed copy.