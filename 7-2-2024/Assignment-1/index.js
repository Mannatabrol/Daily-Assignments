//Develop a calculator program where each operation (addition, subtraction, multiplication, division, etc.) is defined as a separate function. Utilize a switch statement to invoke the appropriate function based 
// on the operator provided. Ensure that each case within the switch statement corresponds to a different calculator operation.
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  let operand1 = parseInt(prompt("Enter the first operand"));
  let operand2 = parseInt(prompt("Enter the second operand"));
  let sol;
  
  function calculator(operator, operand1, operand2) {
    switch (operator) {
      case '+':
        sol = add(operand1, operand2);
        alert("Your result after addition is " + sol);
        break;
      case '-':
        sol = subtract(operand1, operand2);
        alert("Your result after subtraction is " + sol);
        break;
      case '*':
        sol = multiply(operand1, operand2);
        alert("Your result after multiplication is " + sol);
        break;
      case '/':
        sol = divide(operand1, operand2);
        alert("Your result after division is " + sol);
        break;
      default:
        alert("Invalid operator");
        break;
    }
  }
  
  let operator = prompt("Enter the operator (+, -, *, /)");
  calculator(operator, operand1, operand2);
  
