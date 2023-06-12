/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = []
    // edge cases :
    if(nums.length === 0) return result
  
  let start = nums[0];
  let end = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i]
    if (curr === end + 1) {
      end = nums[i];
    } else {
      if (start === end) {
        result.push(start.toString());
      } else {
        result.push(start.toString() + '->' + end.toString());
      }
      start = curr;
      end = curr;
    }
  }
  if (start === end) {
    result.push(start.toString());
  } else {
    result.push(start.toString() + '->' + end.toString());
  }
  
  return result;
    
};