// Objective: Write a script that decides if a number is positive, negative, or zero.
// Instructions:Use prompt() to ask the user to input a number.Use an if/else if/els
let num=parseInt(prompt("Enter a number"));

if(num<0)
{
    alert("The number is negative");
}
else if (num>0)
{
    alert("The number is positive");
}

else{
    alert("The number is zero");
}