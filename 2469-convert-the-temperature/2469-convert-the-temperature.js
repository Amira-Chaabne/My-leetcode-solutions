/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let ans = []
    ans.push(celsius+273.15, celsius * 1.80 + 32.00);
    return ans
};