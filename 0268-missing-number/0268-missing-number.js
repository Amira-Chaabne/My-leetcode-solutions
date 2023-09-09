/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  /** // Brut force solution
    const n = nums.length;
    const total = n * (n + 1) / 2;
    const sum = nums.reduce((a, b) => a + b, 0);
    return total - sum; */
  
  // Using Binary search
    nums.sort((a, b) => a - b); 
    let left = 0;
    let right = nums.length; 
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2); 
        if (nums[mid] == mid) { 
            left = mid + 1;  
        } else {
            right = mid; 
        }
    }
  
    return left;
};
