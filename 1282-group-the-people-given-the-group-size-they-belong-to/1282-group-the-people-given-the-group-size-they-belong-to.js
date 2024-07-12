/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groupMap = {};
    const result = [];
    
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        
        console.log(groupMap[size])
        
        if (!groupMap[size]) {
            groupMap[size] = [];
        }
        
        groupMap[size].push(i);
        
        if (groupMap[size].length === size) {
            result.push(groupMap[size]);
            groupMap[size] = [];
        }
    }
    
    return result;
};