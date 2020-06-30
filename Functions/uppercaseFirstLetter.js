
function upperCaseFirst(inputStr) {
    var valueOfFirstChar = inputStr.charCodeAt(0);
    console.log('Value of first character:', valueOfFirstChar); // 103

    var upperCaseLetter = String.fromCharCode(valueOfFirstChar - 32);
    console.log('Uppercase first character:', upperCaseLetter); // G

    var restOfString = inputStr.slice(1);
    console.log('Rest of the string:', restOfString);  // oldfish

    var finalResult = upperCaseLetter + restOfString;
    console.log('Final result:', finalResult); // Goldfish

    return finalResult;
}

var upperCaseResult = upperCaseFirst('goldfish');
console.log(upperCaseResult)  // Goldfish
