function upperCaseFirst(inputStr) {
  var valueOfFirstChar = inputStr.charCodeAt(0);
  console.log("Value of first character:", valueOfFirstChar); // 103

  var upperCaseLetter = String.fromCharCode(valueOfFirstChar - 32);
  console.log("Uppercase first character:", upperCaseLetter); // G

  var restOfString = inputStr.slice(1);
  console.log("Rest of the string:", restOfString); // oldfish

  var finalResult = upperCaseLetter + restOfString;
  console.log("Final result:", finalResult); // Goldfish

  return finalResult;
}

// use upper case function to capitalize first letter of word.

function titleCase(inputStr) {
  var tokens = inputStr.split(" ");
  console.log("Word tokens:", tokens);

  // Option 1: Use map()
  var upperCaseTokens1 = tokens.map((word) => upperCaseFirst(word));
  console.log("UpperCase1 word tokens:", upperCaseTokens1);

  // Option 2: Use a for loop
  var upperCaseTokens2 = [];
  for (var i = 0; i < tokens.length; i++) {
    upperCaseTokens2.push(upperCaseFirst(tokens[i]));
  }
  console.log("UpperCase2 word tokens:", upperCaseTokens2);

  var finalResult = upperCaseTokens1.join(" ");
  console.log("Final result:", finalResult);

  return finalResult;
}

var titleCaseResult = titleCase("learn how to code for beginners");
console.log(titleCaseResult, "\n\n");

/***Shorter method to make title case using method chaining to shorten the algorithm.
 * When split is called on inputStr, an array is generated and returned. map is then
 * called on this new array. map then creates and returns another array containing words
 *  with the first letter in uppercase. Finally, the join function is called on the array
 * returned from map, which produces a string. This string is then returned by the function. */

function titleCase2(inputStr) {
  return inputStr
    .split(" ")
    .map((w) => upperCaseFirst(w))
    .join(" ");
}

console.log(titleCase2("i am a way shorter implementation"));
