/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
    for(let num of nums){
        obj[num] ? obj[num]++ : obj[num] = 1
    }
      return Object.keys(obj).find(key => obj[key] === 1);
};