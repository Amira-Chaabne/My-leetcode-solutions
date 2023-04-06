/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let myJewels = 0
    for(stone of stones){
       jewels.includes(stone) && myJewels++
       } 
    return myJewels
};