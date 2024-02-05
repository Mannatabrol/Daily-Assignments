// : Calculate the simple interest for given principal, rate of interest, and time period.
// :Use prompt() to ask the user for the principal amount.Ask for the rate of interest per annum.Ask for the time period in years.Calculate the simple interest using the formula SI=P×R×T/100​.Display the calculated interest using alert() or console.log().


let principal = parseFloat(prompt("Enter the principal amount:"));
let rateOfInterest = parseFloat(prompt("Enter the rate of interest per annum:"));
let timePeriod = parseFloat(prompt("Enter the time period in years:"));

let simpleInterest = (principal * rateOfInterest * timePeriod) / 100;

alert("Simple Interest: " + simpleInterest);