/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // let obj = {}
    // let uniqLength = [];
    // for( let n of nums){
       // obj[n] = obj[n]+1 || 1
    // }
    // let uniq = Object.keys(obj).filter(key => obj[key] === 1);
    // return uniq.reduce((a,b) => Number(a) + Number(b), 0)

 const obj = {}
 let sumUniq = 0
 for (let n of nums){
    obj[n] = obj[n]+1 || 1
    if(obj[n] === 1) sumUniq += n
    else if (obj[n] === 2) sumUniq -= n
 }
 return sumUniq

};