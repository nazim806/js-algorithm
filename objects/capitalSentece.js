function capitalSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = [];

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
  });

  return capsArray.join(" ");
}

//Using Map() and Slice()

function capitalSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return capsArray.join(" ");
}
