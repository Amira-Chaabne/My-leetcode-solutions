/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueArray = [...new Set(nums)];
    return uniqueArray.length != nums.length
};
