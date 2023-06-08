/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  return grid.flat().filter(el => el < 0).length
};