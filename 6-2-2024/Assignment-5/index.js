// Objective: Display the multiplication table for a number entered by the user.

let num=parseInt(prompt("Enter a number"));
for( let i =1 ;i <= 10 ; i++)
{
    console.log(num + "x" + i + "=" + num*i)
}