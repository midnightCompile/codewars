# Exercise: Complete the solution so that it reverses all of the words within
# the string passed in.
#
# There are numerous ways to solve this problem, some of which will be 
# demonstrated below; this file is a work in progress.



# Solution 1

def reverse_words_one(str):
    words = str.split(" ")
    backwards = " ".join(reversed(words))
    return backwards
