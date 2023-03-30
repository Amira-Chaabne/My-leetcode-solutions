/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
// let sorted = nums.sort((a,b) => a-b)
// let length = sorted.length
// return length % 2 === 0 ? nums[length / 2] : nums[(length - 1) / 2]
    
    // Boyer–Moore majority vote algorithm
    
  let count = 0;
  let majNum = 0;
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (!count) {
      majNum = nums[i];
      count = 1;
    } else {
      count += (nums[i] === majNum ? 1 : -1);
    }
  }
  return majNum;
    
};