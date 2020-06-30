function replaceChar(inputStr, replaceThis, withThis) {
  var replacedValue = [];

  for (var i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === replaceThis) {
      replacedValue.push(withThis);
    } else {
      replacedValue.push(inputStr[i]);
    }
  }

  return replacedValue.join("");
}

console.log(replaceChar("hello world", "l", "X")); // heXXo worXd
