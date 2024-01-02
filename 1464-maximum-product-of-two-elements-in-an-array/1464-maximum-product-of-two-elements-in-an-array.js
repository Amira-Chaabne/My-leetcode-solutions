/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let biggest = 0;
   let secondBiggest = 0;

    for (let num of nums) {
        if (num > biggest) {
            secondBiggest = biggest;
            biggest = num;
        } else if (num > secondBiggest) {
            secondBiggest = num;
        }
     }

    return (biggest - 1) * (secondBiggest - 1);
 }


//var maxProduct = function(nums) {
  // const sorted = nums.sort((a,b) => (a-b))
  // let i = sorted[sorted.length-1]
  // let j = sorted[sorted.length-2]
  // return (+i-1)*(+j-1)
//};