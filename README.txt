This is the  calculator project.

This calculator will include the following functions: addition, subtraction, multiplication and division

The project will be built in several stages:

stage 1: Create the main working prototype that works with two digits IE only does one thing at a time(subtraction, addition, multiplication, division)

stage 2: Update the prototype to accept multiple variables and do multiple actions;

stage 3: Add the dot button to allow for decimal numbers and fix any errors

stage 4: Complete the css for the project and format the javascript, slim down the functions

Sudo code:

let var = numberORActionRegex.match("the inout string from the user");

var = an array of numbers and arithmetic number;

since we want to do multiplication and division first we will look for those symbols first;

for(let i = 0; i < var.length; i++)
{
    switch (i)
    {
        case "*":
        return multiplication function(i-1, i+1);
        case "/":
        return division function(i-1, i+1);
        default: return;
    }
}
another loop to do the addition and subtraction

for(let i = 0; i < var.length; i++)
{
    switch (i)
    {
        case "*":
        return addition function(i-1, i+1);
        case "/":
        return subtraction function(i-1, i+1);
        default: return;
    }
}

in the arithmetic functions we will use the reduce method to shorten the main array and replace the 
a + b with the answer, i for the loop will need to be set back by one IE i-- to make sure the loop
doesnt skip over anything;
