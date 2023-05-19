/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sums = []
    for(let a of accounts){
      sums.push(a.reduce((a, b) => a + b, 0))
    }
    return Math.max(...sums)
};