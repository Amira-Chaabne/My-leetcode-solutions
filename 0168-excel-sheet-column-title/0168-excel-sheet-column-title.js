/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--;
        const charCode = 65 + (columnNumber % 26);
        result = String.fromCharCode(charCode) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};