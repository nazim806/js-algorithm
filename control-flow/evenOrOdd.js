// determine whether a number is even or odd

displayNumbers(10);

function displayNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
