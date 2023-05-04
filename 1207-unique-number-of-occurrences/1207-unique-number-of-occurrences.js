/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}
    for(let a of arr){
      obj[a] ? obj[a]++ : obj[a] = 1
    }
  let values = Object.values(obj)
  return [...new Set(values)].length === values.length

};