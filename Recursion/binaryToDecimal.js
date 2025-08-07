function binaryToDecimal(binaryStr, index = 0) {
  if (index === binaryStr.length) return 0;

  const bit = Number(binaryStr[index]);
  const power = binaryStr.length - 1 - index;

  return bit * Math.pow(2, power) + binaryToDecimal(binaryStr, index + 1);
}
const binary = "1011"; 

const decimal = binaryToDecimal(binary);
console.log(`Binary ${binary} = Decimal ${decimal}`);