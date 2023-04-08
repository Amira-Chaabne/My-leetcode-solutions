/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  // let obj = {};
  // let res = 0;
  // for(let i=0;i<nums.length;i++){
    // obj[nums[i]] = true;
    // let curr = nums[i]
       // if(obj[curr-diff] && obj[curr - diff*2]){
         // res++
      // }
  // }
  // return res;
    
  const set = new Set()
  let res = 0
  for (let num of nums) {
    set.add(num)
    if (set.has(num - diff) && set.has(num - 2 * diff)) res++
  }
  return res
    
};