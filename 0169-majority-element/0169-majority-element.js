/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
// let sorted = nums.sort((a,b) => a-b)
// let length = sorted.length
// return length % 2 === 0 ? nums[length / 2] : nums[(length - 1) / 2]
    
    // Boyer–Moore majority vote algorithm
 // let count = 0;
  // let majNum = 0;
  // let length = nums.length;
  // for (let i = 0; i < length; i++) {
    // if (!count) {
      // majNum = nums[i];
      // count = 1;
    // } else {
      // count += (nums[i] === majNum ? 1 : -1);
    // }
  //}
  // return majNum;
    
        // Trying the fastest from discussion
    let a = nums.sort();
    let arr= []
    let count = 1
    let max = 0;
    for(i = 0; i< a.length; i++){
        if(a[i]==a[i+1]){
            count++
        }
        else{
            count=1;
        }
        if(max<count){
            max = count;
            arr.push(a[i])
        }
    }
    return arr[arr.length-1];
    
};