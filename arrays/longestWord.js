// longest word in a sentence

// Using for loop
let text = " I love San Francisco";
function longestWord(text) {
  let wordArray = text.split("");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
      result = wordArray[i];
    }
  }
  return result;
}

// Using sort method

function longestWord(text) {
  let sortedArray = text
    .split("")
    .sort((wordA, wordB) => wordB.length - wordA.length);
  return sortedArray[0];
}
