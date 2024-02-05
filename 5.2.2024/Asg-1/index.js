// // Assignment-1: Create a simple calculator that asks the user for two numbers and then displays the result of adding, subtracting, multiplying, and dividing those numbers.
// :Use prompt() to ask the user for the first number.Use another prompt() to ask for the second number.Convert the input strings to numbers.Perform addition,
//  subtraction, multiplication, and division with these numbers.Use alert() or console.log() to show each result to the user.

console.log("Simple Calculator");
let operation = parseInt(prompt("Enter the operation (1 for addition, 2 for subtraction, 3 for multiplication, 4 for modulus, 5 for division)"));

switch (operation) {
    // Addition
    case 1:
        let num1 = parseFloat(prompt("Enter the first number for addition"));
        let num2 = parseFloat(prompt("Enter the second number for addition"));
        let sum = num1 + num2;
        alert("Sum: " + sum);
        break;

    // Subtraction
    case 2:
        let num3 = parseFloat(prompt("Enter the first number for subtraction"));
        let num4 = parseFloat(prompt("Enter the second number for subtraction"));
        let diff = num3 - num4;
        alert("Difference: " + diff);
        break;

    // Multiplication
    case 3:
        let num5 = parseFloat(prompt("Enter the first number for multiplication"));
        let num6 = parseFloat(prompt("Enter the second number for multiplication"));
        let mul = num5 * num6;
        alert("Product: " + mul);
        break;

    // Modulus
    case 4:
        let num7 = parseFloat(prompt("Enter the first number for modulus"));
        let num8 = parseFloat(prompt("Enter the second number for modulus"));
        let mod = num7 % num8;
        alert("Modulus: " + mod);
        break;

    // Division
    case 5:
        let num9 = parseFloat(prompt("Enter the first number for division"));
        let num10 = parseFloat(prompt("Enter the second number for division"));

        // Check if the divisor is not zero before performing division
        if (num10 !== 0) {
            let div = num9 / num10;
            alert("Division Result: " + div);
        } else {
            alert("Cannot divide by zero. Please enter a non-zero divisor.");
        }
        break;

    default:
        alert("Invalid operation. Please enter a valid operation code (1-5).");
        break;
}
