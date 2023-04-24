/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    string1 = "";
    string2 = "";
  
  for(let word of word1){
    string1 += word
  }
  for(let word of word2){
    string2 += word
  }
  
  return string1 === string2
  
};