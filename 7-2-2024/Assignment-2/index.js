function sumValidNumbers(arr) {
    let sum = 0;
    arr.forEach(element => {
      if (typeof element === 'number' && !isNaN(element)) {
        sum += element;
      }
    });
    return sum;
  }
  
  // Example usage:
  const a = ['mannat', 1, 2, , 3.0, 5.3];
  const sum = sumValidNumbers(a);
  console.log("Sum of valid numerical values within the array:", sum);
  