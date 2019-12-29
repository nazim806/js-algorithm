//size here refers to the maximum number of elements in each new sub-array
function chunkArray(array, size) {
  let result = [];
  for (value of array) {
    let lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length == size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
}

// looping through the chunk of arrays

function chunkArray(array, size) {
  let result = [];
  let arrayCopy = [...array];
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }

  return result;
}

// using slice method

function chunkArray(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(chunk);
  }
  return result;
}

// recursion

function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}
