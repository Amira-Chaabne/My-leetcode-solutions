/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
 if (nums.length <= 1) {
        return nums;
    }

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(sortArray(left), sortArray(right));
};

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
};