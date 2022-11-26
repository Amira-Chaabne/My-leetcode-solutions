/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = []
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(j != i && nums[i] > nums[j])                    count++
     }
     res.push(count)
     count = 0
    }
   return res
};