/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   // let myJewels = 0
   // for(let stone of stones){
     //  jewels.includes(stone) && myJewels++
    // } 
    // return myJewels
    
    // let myJewels = 0
    // let setJewels = new Set(jewels.split(""))
    // for(let stone of stones){
       // setJewels.has(stone) && myJewels++
    //  } 
    // return myJewels
    
    const map = {}
    let myJewels = 0
    
    for (let jewel of jewels) {
        map[jewel] = true
    }
    
    for (let stone of stones) {
        map[stone] ? myJewels++ : null
    }
    return myJewels
};