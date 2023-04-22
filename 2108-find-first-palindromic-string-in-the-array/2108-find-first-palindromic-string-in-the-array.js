/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    //let firstPalindromic = "";
    //for ( let word of words){
       // const reversed = word.split("").reverse().join("")
        //if (word === reversed){
         //   firstPalindromic = word
       //     break;
     //   }
    //}
    //return firstPalindromic
    
    //with a recursion : This solution is not the best one and will be really slow if the String is very long
    //let firstPalindromic = "";
    //function reverseString(word) {
      //  return (word === '') ? '' : reverseString(word.substr(1)) + word.charAt(0);
    //}
    
    //for ( let word of words){
        //if (word === reverseString(word)){
          //  firstPalindromic = word
        //    break;
      // }
    //}
    //return firstPalindromic
    
    
   // I think this is the fastest xD
    let fisrtPalindrome = "";
    function isPalindrome(word) {
    let len = Math.floor(word.length / 2);
    for (let i = 0; i < len; i++)
        if (word[i] !== word[word.length - i - 1])
            return false;
        return word;
    }
    
    for ( let word of words){
        if (word === isPalindrome(word)){
            fisrtPalindrome = word
            break;
       }
    }
    return fisrtPalindrome
};