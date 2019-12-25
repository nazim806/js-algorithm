
//FizzBuzz solution

const output = fizzBuzz(27);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
       return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
      return 'FizzBuzz';

    if (input % 3 === o)
      return 'Fizz';
      
      if (input % 5 === 0)
        return 'Buzz';

    return input;

}