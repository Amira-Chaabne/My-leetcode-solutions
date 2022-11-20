/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
      let hashMap = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++){     
      let current = nums[i]   
        if (!hashMap.has(current)){
            hashMap.set(current, 1);         
        } else {
            count = count + hashMap.get(current);
            hashMap.set(current, hashMap.get(current) + 1);
        }
    }
return count;
};