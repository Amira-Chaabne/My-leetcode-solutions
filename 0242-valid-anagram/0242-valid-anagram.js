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
};

 