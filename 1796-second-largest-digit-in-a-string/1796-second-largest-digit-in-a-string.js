/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  const nums = s.replace(/\D/gi, ''); // Extract only nums from the string
  const unique = [...new Set(nums)].sort((a,b) => b-a) // return a unique sorted array
  return unique[1] || -1 // return the second largest || -1
};
