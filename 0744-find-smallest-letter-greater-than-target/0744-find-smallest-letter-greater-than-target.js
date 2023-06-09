/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let unique = new Set(letters)
    for(let u of unique){
        if(u > target) return u
    }
    return letters[0]
};