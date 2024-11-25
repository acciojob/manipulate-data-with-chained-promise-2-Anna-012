//your JS code here. If required.
// Function that returns a promise resolved with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter((num) => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000); // Resolves after 1 second
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map((num) => num * 2);
      resolve(multipliedNumbers);
    }, 2000); // Resolves after 2 seconds
  });
}

// Update the text of the output element
function updateOutput(text) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = text;
}

// Main code using promise chaining
getNumbers()
  .then((numbers) => {
    updateOutput(`Original numbers: ${numbers}`);
    return filterOddNumbers(numbers);
  })
  .then((evenNumbers) => {
    updateOutput(`Even numbers: ${evenNumbers}`);
    return multiplyEvenNumbers(evenNumbers);
  })
  .then((finalNumbers) => {
    updateOutput(`Multiplied numbers: ${finalNumbers}`);
  })
  .catch((error) => {
    console.error('Error:', error);
    updateOutput('An error occurred');
  });
