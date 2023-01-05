# Calculator App

## Description

This is a calculator app that allows for a long string of calculations to be inputed. The string is then split into array elements. The element is either a number or a symbol. Then we loop through the array starting from the second element in the array because it is supposed to be a symbol and the i-1 and i+1 elements are supposed to be numbers. If the condition of (i -> symbol, i-1 and i+1 -> number) is not met the calculator throws an error. 

## Technologies Used

### `HTML/CSS`

In this app basic HTML and CSS were used to give the calculator some basic structure. Like puting the numbers into a grid and adding styling to the web page.

### `Javascript`

Vanilla Javascript was used for the main functionality of this project. I used methods like split(), splice() and loops to go through all the elements of array and perform the neccessary calculations. After each calculations the length of the array is reduced using splice until the length of the array becomes 1 and there is only the answer left. To go over the array there are two different loops. The first one is meant for multiplication and division and the second one for addition and subtraction. 

## Problems encountered

### Keeping track of the calculations

At first I tried having the current total in a seperate variable and the initial array intact but then it was difficult to tell if the calculations were and and all the steps were taken. Then I decided to reduce the arrays length with each calculation so that I know all the calculations are completed when the length of the array reaches 0.

### Allowing inputs of several calculations one after the other

At first I tried using variables to store calculations but I quickly realised that this approach was not scalable and required too many code corrections for it to work. Then I moved to the array approach where the user input is split and stored in an array as either symbols or numbers and later looped through.

## Final remarks

Since this was one of my first projects that used Javascript it was slightly difficult to come up with the solutions to the problems mentioned above. Nevertheless after a few trials and error the solution provides basic functionality and treat with most of the errors. 


