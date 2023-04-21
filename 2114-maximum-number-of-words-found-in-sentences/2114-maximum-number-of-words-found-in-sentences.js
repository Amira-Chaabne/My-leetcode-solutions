/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const lengths = sentences.map(sentence => {
        return sentence.split(" ").length
    })
    return Math.max(...lengths)
};