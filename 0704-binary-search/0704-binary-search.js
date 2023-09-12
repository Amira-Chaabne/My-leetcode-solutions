/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // Brut force solution ( with time complexity: O(n) )
    //for(let i = 0; i < nums.length; i++){
        //if(nums[i] === target) {
          //  return i;
        //}
    //}
    //return -1;

// Bineary search solution ( with time complexity: O(log n) )
  let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let m = Math.floor((left + right) / 2);
        if(target === nums[m]) return m;

        if(target < nums[m]){
            right = m - 1;
        } else {
            left = m + 1;
        }
    }

    return -1;
};
