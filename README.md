# freeCodeCamp Javascript Projects

## Description
Projects created for the JavaScript Algorithms and Data Structures course

## Projects
- Palindrome Checker
- Roman Numeral Converter
- Caesars Cipher
- Telephone Number Validator
- Cash Register

## Palindrome Checker
### About
Algorithm that checks if a word or a setence can be a palindrome. 
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. 
The algorithm removes all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

## Roman Numeral Converter
### About
Converts any given number into a roman numeral.

## Caesars Cipher
### About
Algorithm that decodes a ROT13 string and returns it.

ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet.

## Telephone Number Validator
### About
Checks if the given number is a valid US number. It can return true or false.
Valid formats:
* 555-555-5555
* (555)555-5555
* (555) 555-5555
* 555 555 5555
* 5555555555
* 1 555 555 5555

## Cash Register
### About
Algorithm creates a function called checkCashRegister() that works as a cash register drawer. It accepts a purchase price as the first argument, payment as the second argument, and cash-in-drawer as the third argument.
The checkCashRegister() function always returns an object with a status key and a change key.


Possible outputs:

{status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

{status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

{status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
