/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  const setNums1 = new Set(nums1);
  const setNums2 = new Set(nums2);

  let count1 = 0;
  nums1.forEach(element => {
    if (setNums2.has(element)) {
      count1++;
    }
  });

  let count2 = 0;
  nums2.forEach(element => {
    if (setNums1.has(element)) {
      count2++;
    }
  });

  return [count1, count2];
}