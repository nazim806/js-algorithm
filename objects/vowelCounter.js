//iterative approach
const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
  //initialize vowel counter
  let counter = 0;

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  //Return number of vowels in the text
  return counter;
}

//Regular expressions

function vowelCounter(text) {
  //Regex search text and store all matching instances
  let matchingInstances = text.match(/[aeiou]/gi);

  if (matchingInstances) {
    // Return total number of vowels in the text
    return matchingInstances.length;
  } else {
    return 0;
  }
}
