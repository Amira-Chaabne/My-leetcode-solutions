/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  let set = new Set()
  const sorted = arr.sort((a,b) => a-b)
  for(let i=0; i < sorted.length-1; i++){
    set.add(sorted[i+1] - sorted[i])
  }
  return set.size === 1
};