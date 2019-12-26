
function palindromeChecker(text){
    let reversedText = text.toLowerCase()
          .split('').reverse().join('')
          return text === reversedText
}

//Using loop and comparing characters to check Palindrome

function checkPalindrome(text){
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index)=>{
        return letter === charArray[charArray.length - index - 1];

    })

    return result
}