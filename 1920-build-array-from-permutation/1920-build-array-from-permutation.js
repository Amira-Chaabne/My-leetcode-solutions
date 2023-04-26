/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  let ans = []
  for (let i = 0; i < nums.length; i++){
    let current = nums[i]
    ans.push(nums[current])
  }
  return ans
};