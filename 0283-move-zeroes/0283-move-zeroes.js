/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let nonZeroCount = 0;

    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroCount] = nums[i];
            nonZeroCount++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroCount; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
  
  
  // buit in sort solution
  // return nums.sort((a,b) => a === 0 ? 1 : b === 0 ? -1 : 0)
};