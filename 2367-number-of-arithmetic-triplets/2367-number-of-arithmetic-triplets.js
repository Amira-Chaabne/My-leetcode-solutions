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
    
  // const set = new Set()
  // let res = 0
  // for (let num of nums) {
    // set.add(num)
    // if (set.has(num - diff) && set.has(num - 2 * diff)) res++
  // }
  // return res
    
// the worst solution : submitting it just to know how worst it can be xD
    let n = nums.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) res++;
            }
        }
    }
    return res;
    
};