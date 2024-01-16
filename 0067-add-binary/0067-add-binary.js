/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i--], 10); // Add bit from a
        if (j >= 0) sum += parseInt(b[j--], 10); // Add bit from b
        result = (sum % 2) + result; // Calculate the bit to add to the result
        carry = Math.floor(sum / 2); // Calculate the carry
    }

    return result;
};