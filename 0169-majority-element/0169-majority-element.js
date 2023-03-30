/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
let sorted = nums.sort((a,b) => a-b)
let length = sorted.length
return length % 2 === 0 ? nums[length / 2] : nums[(length - 1) / 2]
};