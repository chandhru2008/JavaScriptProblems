function getUserInput(callback) {
  const input = prompt("Enter something:");
  callback(input);
}

const printInput = data => console.log("User entered:", data);

getUserInput(printInput);