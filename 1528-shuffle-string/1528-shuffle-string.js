/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const result = []
    
    for (let i = 0; i < s.length; i++) {
        result.push(s[indices.findIndex(num => num === i)])
    }
    
    return result.join("")
};