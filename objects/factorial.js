// Using a fo loop

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

//Using a While loop

function factorial(n) {
  let result = n;
  if (n <= 1) {
    return 1;
  }
  while (n > 1) {
    n--;
    result *= n;
  }

  return result;
}

//Using recursion

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
