function reverseString(text) {
  return text
    .split("")
    .reverse()
    .join("");
}

// ES6 way

function reverseString(text) {
  return [...text].reverse().join("");
}

//Using for loop to reverse a string

function reverseString(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
}

// Using a for .. of loop

function reverseString(text) {
  let result = "";
  for (let char of text) {
    result = char + result;
  }
  return result;
}

// using reduce()

function reverseString(text) {
  return text.split("").reduce((acc, char) => char + acc);
}
