/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sorted = nums.sort((a,b) => (a-b))
    let i = sorted[sorted.length-1]
    let j = sorted[sorted.length-2]
    return (+i-1)*(+j-1)
};