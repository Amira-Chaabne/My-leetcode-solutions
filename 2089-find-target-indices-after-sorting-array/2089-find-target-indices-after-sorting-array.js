/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  let res = []
let sortedArr = nums.sort((a, b) => a - b )
  for(let i = 0; i < sortedArr.length ; i++) {
    if(sortedArr[i] === target) res.push(i)
  }
  return res
};