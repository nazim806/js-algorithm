function reverseWords(str) {
  var rev = [],
    wordLen = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] == " " || i == 0) {
      rev.push(str.substr(i, wordLen + 1));
      wordLen = 0;
    } else wordLen++;
  }
  return rev.join(" ");
}

// built in methods

function reverseWords(str) {
  return str.split(" ").reverse();
}
