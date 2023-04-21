/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    //const lengths = sentences.map(sentence => {
        //return sentence.split(" ").length
    //})
    //return Math.max(...lengths)
    
    let count = 0;
    for( let sentence of sentences){
        let wordsLengths = sentence.split(" ")
        count = Math.max(count, wordsLengths.length)
    }
    return count
};