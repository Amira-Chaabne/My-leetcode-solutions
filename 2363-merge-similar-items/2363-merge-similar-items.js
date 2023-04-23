/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    // initialize a map instance
    let map = new Map()
    // loop over the first array and push key, value to the map instance
    for(let item of items1){
        map.set(item[0], item[1])
    }

    // loop over the second array and check
    for(let item of items2){
        let key = item[0]
        let value = item[1]
        // if the map has a key, concat the value
        if(map.has(key)){
            map.set(key, map.get(key) + value)
        // else add the unfound array to the map instance
        }else{
            map.set(key, value)
        }
    }
  // sort and convert the map into an array
  return Array.from(map.entries()).sort((a,b) => a[0] - b[0])
};