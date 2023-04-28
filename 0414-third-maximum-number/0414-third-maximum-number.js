/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let sorted = [...new Set(nums)].sort((a,b) => b-a)
  return sorted[2] ?? sorted[0]
};