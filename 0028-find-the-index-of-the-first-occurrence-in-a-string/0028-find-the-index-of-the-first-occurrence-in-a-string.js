/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }

    const lenHaystack = haystack.length;
    const lenNeedle = needle.length;


  for (let i = 0; i <= lenHaystack - lenNeedle; i++) {
        if (haystack.substring(i, i + lenNeedle) === needle) {
            return i;
        }
    }

    return -1;
};