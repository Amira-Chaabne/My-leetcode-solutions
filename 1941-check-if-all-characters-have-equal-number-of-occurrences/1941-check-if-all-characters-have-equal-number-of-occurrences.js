/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(str) {
    const obj = {};
    for(let s of str) {
		obj[s] = obj[s] + 1 || 1;  
}
    const arrayToCheck = Object.values(obj)
    return arrayToCheck.every(val => val === arrayToCheck[0]);
}