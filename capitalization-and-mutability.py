# Exercise: Your coworker was supposed to write a simple helper function to 
# capitalize a string (that contains a single word) before they went on vacation.
#
# Unfortunately, they have now left and the code they gave you doesn't work.
# Fix the helper function they wrote so that it works as intended (i.e. make
# the first character in the string "word" upper case).
#
# Don't worry about numbers, special characters, or non-string types being
# passed to the function. The string lengths will be from 1 character up to 10
# characters, but will never be empty.
#
# Function provided:
# def capitalize_word(word):
#   return "".join(char.upper() for char in word)
#
# There are numerous ways to solve this problem, several of which are 
# demonstrated below.



# Solution 1:  Using capitalize()

def capitalizeWordOne(word):
    return word.capitalize()




# Solution 2: Using Slicing

def capitalizeWordTwo(str):
    return str[0].upper() + str[1:]

# Notes: strings follow the sequence protocal, and all sequences support a 
# feature called slicing. 
# 
# Essentially, slicing takes advantage of a "step" field, which is typically
# notated as [start,stop,step]. Omitting values for start and stop indicates
# default values of 0 and string length, respectively. Setting step to -1 
# denotes starting from the end and stopping at the start.