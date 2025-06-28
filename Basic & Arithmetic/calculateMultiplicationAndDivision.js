function calculateMultiplicationAndDivision(num1, num2) {
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

    console.log(`Multiplication of ${num1} and ${num2} is: ${multiplication}`);
    console.log(`Division of ${num1} by ${num2} is: ${division}`);
}

calculateMultiplicationAndDivision(10, 5);
