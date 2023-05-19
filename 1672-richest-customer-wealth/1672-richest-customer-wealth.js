/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sums = [] // initialize an empty array
    for(let a of accounts){ // map over the accounts array
      sums.push(a.reduce((a, b) => a + b, 0)) // reduce the nest array to one number ( the sum )
    }
    return Math.max(...sums) // return the biggest number
};