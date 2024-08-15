const reverseString = function(word) {
    word = word.toString();
    let reversedWord = "";
    for (i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }    
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
