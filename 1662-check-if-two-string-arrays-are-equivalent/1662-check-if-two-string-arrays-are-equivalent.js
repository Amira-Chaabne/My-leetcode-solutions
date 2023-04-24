/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
//var arrayStringsAreEqual = function(word1, word2) {
    // return word1.join("") === word2.join("");
//};

const concatArray = (arr) => arr.reduce((acc,a) => acc+a)
var arrayStringsAreEqual = function(word1, word2) {
    return concatArray(word1) === concatArray(word2)
};