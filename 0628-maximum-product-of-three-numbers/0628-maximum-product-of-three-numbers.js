/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a,b) => a - b)
  prod1 = nums[nums.length -1] * nums[nums.length -2] * nums[nums.length -3]
  prod2 = nums[0] * nums[1] * nums[nums.length -1]
  return Math.max(prod1, prod2)
};