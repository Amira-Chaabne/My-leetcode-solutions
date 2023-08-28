/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
// Brut force
var targetIndices = function(nums, target) {
  let res = []
let sortedArr = nums.sort((a, b) => a - b )
  for(let i = 0; i < sortedArr.length ; i++) {
    if(sortedArr[i] === target) res.push(i)
  }
  return res
};
 */
// With binary search
function targetIndices(nums, target){
    nums.sort((a,b)=>a-b);
    var res = [];
    var lower = binarySearch(nums, target, true);
    var upper = binarySearch(nums, target, false);
    for (var i = lower; i <= upper; i++) {
        res.push(i);
    }
    return res;
}

function binarySearch(nums, target, isLeft) {
    var left = 0;
    var right = nums.length - 1;
    var mid = 0;
    var res ;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            res = mid;
            if (isLeft) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return res;
}