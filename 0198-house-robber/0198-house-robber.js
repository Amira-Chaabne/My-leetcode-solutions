/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let maxRobbedAmount = [];
    maxRobbedAmount[0] = nums[0];
    maxRobbedAmount[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        maxRobbedAmount[i] = Math.max(nums[i] + maxRobbedAmount[i - 2], maxRobbedAmount[i - 1]);
    }

    return maxRobbedAmount[nums.length - 1];
};