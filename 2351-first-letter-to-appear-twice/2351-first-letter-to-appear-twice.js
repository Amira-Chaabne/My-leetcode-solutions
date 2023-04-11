/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    // let obj = new Set();
    
    // for(let i = 0; i <= s.length; i++){
        // let curr = s[i];
        // if (obj.has(curr)) return curr;
        // else obj.add(curr);
    // }
    
    const obj = {};
    for(let i of s) {
		obj[i] = obj[i] + 1 || 1;  
        
        if(obj[i] == 2) {
            return i;
        }
    }
    
};