/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    return nums.sort((a,b) => a === 0 ? 1 : b === 0 ? -1 : 0)
};