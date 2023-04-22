/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let firstPalindromic = "";
    for ( let word of words){
        const reversed = word.split("").reverse().join("")
        if (word === reversed){
            firstPalindromic = word
            break;
        }
    }
    return firstPalindromic
};