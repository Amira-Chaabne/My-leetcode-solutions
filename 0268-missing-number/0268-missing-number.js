/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const total = n * (n + 1) / 2;
    const sum = nums.reduce((a, b) => a + b, 0);
    return total - sum;
};
