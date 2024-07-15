/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
     let totalSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let end = i + 1;
        let start = arr.length - i;
        let totalSubarrays = end * start;

        let oddSubarrays = Math.floor((totalSubarrays + 1) / 2);

        totalSum += oddSubarrays * arr[i];
    }

    return totalSum;
};