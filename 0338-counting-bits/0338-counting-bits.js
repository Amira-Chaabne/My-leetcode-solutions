/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
 let ans =[]
    for(let i = 0; i<n+1; i++){
        ans[i]= i.toString(2).split('0').join("").length
    }
    
    return ans
};