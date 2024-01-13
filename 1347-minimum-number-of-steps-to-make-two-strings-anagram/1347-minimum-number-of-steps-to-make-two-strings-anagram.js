/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
     const countS = {};
    const countT = {};

    for (let char of s) {
        countS[char] = (countS[char] || 0) + 1;
    }

    for (let char of t) {
        countT[char] = (countT[char] || 0) + 1;
    }

    let steps = 0;
    for (let char in countS) {
        steps += Math.max(0, countS[char] - (countT[char] || 0));
    }

    return steps;
};