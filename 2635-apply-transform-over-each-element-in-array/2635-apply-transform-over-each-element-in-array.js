/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
 //return arr.map(fn)
  
  const res = [];
  for(let i in arr){
    res.push(fn(arr[i], +i))
  }
  return res
};