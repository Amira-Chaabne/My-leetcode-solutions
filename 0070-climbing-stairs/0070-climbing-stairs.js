/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if (n <= 2) return n;

    let oneStepBefore = 2;
    let twoStepsBefore = 1;
    let allWays = 0;

    for (let i = 2; i < n; i++) {
        allWays = oneStepBefore + twoStepsBefore;
        twoStepsBefore = oneStepBefore;
        oneStepBefore = allWays;
    }

    return allWays;
};