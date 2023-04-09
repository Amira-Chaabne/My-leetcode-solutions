/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    // let count = 0;
    // allowed = new Set(allowed)
    
    // Check if the word is allowed
    // function isAllowed(word){
        // for(let w of word)
            // if(!allowed.has(w)) return false
        // return true
    // }
    
    // return count of allowed words
   // for(let ws of words) count += isAllowed(ws)
    // return count
    
    // js predefined functions
    return words.filter((x) =>
        x.split("").every((x) => allowed.split("").includes(x))
    ).length;
    
};