/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString();
    let newNumber = 0;
    for (let n of num) {
        newNumber += Number(n);
    }
    if (newNumber.toString().length === 1) return newNumber;
    return addDigits(newNumber);
};