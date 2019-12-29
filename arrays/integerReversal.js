// arrow function
const reversedNumber = num =>
  parseFloat(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(num);

// Using regular function

function reversedNumber(num) {
  return (
    parseFloat(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(num)
  );
}
