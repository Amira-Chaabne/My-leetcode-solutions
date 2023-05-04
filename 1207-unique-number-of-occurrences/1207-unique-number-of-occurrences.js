/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // Create an object with values number of occurence of its key
    let obj = {}
    for(let a of arr){
      obj[a] ? obj[a]++ : obj[a] = 1
    }
  // Get an array of values of the object
  let values = Object.values(obj)
  // Create a unique arr and compare it to the initial ( array of values )
  return [...new Set(values)].length === values.length
};