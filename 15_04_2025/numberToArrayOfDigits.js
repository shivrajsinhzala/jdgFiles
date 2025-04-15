const num = 123456789;
const numberToArrayOfDigits = (num) => {
  return num.toString().split('').map(n=>Number(n));
}

console.log(numberToArrayOfDigits(num));