/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const uniqueChars = new Set(sentence)
    return uniqueChars.size === 26
};