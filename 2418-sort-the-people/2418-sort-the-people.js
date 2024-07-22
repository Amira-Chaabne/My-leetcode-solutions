/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const pairedArray = names.map((name, index) => ({ name, height: heights[index]         }));
    
    pairedArray.sort((a, b) => b.height - a.height);
    return pairedArray.map(pair => pair.name);
};