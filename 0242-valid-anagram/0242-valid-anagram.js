/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // edge cases:
  if(s.length != t.length) return false
  
  // One line solution
  return s.split('').sort().join('') === t.split('').sort().join('');
  
  // Solution with new map
  // let map = new Map()
  
  // for(let c of s){
     // map.set(c, 1)
    // t.includes(c) && map.delete(c)
    // }
  
  // return map.size === 0
};

 