/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(str) {
  let matches = 0;
	let balance = 0;

	for (let s of str) {
    s === "R" ? balance-- : balance++
    balance === 0 && matches++
	}

	return matches;
};