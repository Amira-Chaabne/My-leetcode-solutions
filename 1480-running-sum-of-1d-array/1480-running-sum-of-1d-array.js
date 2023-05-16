/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let currentSum = 0
    return nums.map((num) => currentSum += num)
};