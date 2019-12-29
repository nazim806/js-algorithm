function searchReplace(str, word, newWord) {
  if (word[0] === word[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }
  return str.replace(word, newWord);
}

// Using Regular expression

function searchReplace(str, word, newWord) {
  let regex = new RegExp(word, "gi");
  if (/[A-Z]/.test(word[0])) {
    newWord = newWord.charAt(0).toUpperCAse() + newWord.slice(1);
  }
  return str.replace(regex, newWord);
}
