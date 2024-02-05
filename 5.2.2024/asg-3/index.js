// : Develop a simple application that converts values from one unit to another (e.g., kilometers to miles, Celsius to Fahrenheit).
// :Ask the user for the value to convert using prompt().Ask the user for the unit they are converting from and the unit they are converting to (for simplicity, you can assume they will enter specific units you've taught them).Calculate the converted value.Display the result using alert() or console.log().


let value = parseInt(prompt("Enter the value"));

alert("Choose from kilomiles, miles, Fahrenheit, or Celsius");
let fromunit = prompt("Enter the unit to convert from");

let tounit = prompt("Enter the unit to convert to");

let originalvalue;

if (isNaN(value)) {
    alert("Invalid input. Please enter a valid numerical value.");
} else {
    if (fromunit === "kilomiles" && tounit === "miles") //from conversion of km to ml
     {
        originalvalue = value * 0.62;
        alert("Your value is " + originalvalue + " miles");
    } else if (fromunit === "celusis" && tounit === "Fahrenheit") //from conversion of c to f
     {
        originalvalue = (value * 9 / 5) + 32;
        alert("Your value is " + originalvalue + " Fahrenheit");
    } else if (fromunit === "miles" && tounit === "kilomiles") // from conversion  of ml to kl
     {
        originalvalue = value * 1.609;
        alert("Your value is " + originalvalue + " kilometers");
    } else if (fromunit === "Fahrenheit" && tounit === "celusis") // from conversion of f to c
    {
        originalvalue = (value - 32) * 5 / 9;
        alert("Your value is " + originalvalue + " Celsius");
    } else {
        alert("Not a valid conversion");
    }
}
