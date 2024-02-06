//Objective: Create a script that acts as a simple menu for a calculator (add, subtract, multiply, divide).


alert("Calculator Menu")
 
alert("Enter your choice")
let choice=parseInt(prompt("1.Add 2.Sub 3.Mul 4.Div"))

let sol;

let num1=parseInt(prompt("Enter Your First Number"));
let num2=parseInt(prompt("Enter Your Second Number"));


switch(choice)
{
    case 1: 
       sol=num1+num2;
       alert("The result of addition is " + sol);
       break;
       
       case 2: 
       sol=num1-num2;
       aler("The result of subtraction is " + sol);
       break;

       case 3: 
       sol=num1*num2;
       alert("The result of multiplication is " + sol);
        break;

       case 4: 
       sol=num1/+num2;
       aler("The result of division is " + sol);
       break;

default :  alert("Entered invalid operation");
}