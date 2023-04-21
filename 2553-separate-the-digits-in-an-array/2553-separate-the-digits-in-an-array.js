/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = []
    for(let num of nums){
        num.length === 1 ? res.push(num) : res.push(...Array.from(String(num), Number))
    }
    return res
};