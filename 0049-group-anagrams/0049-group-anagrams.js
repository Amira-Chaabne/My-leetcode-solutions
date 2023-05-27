/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs){
    //const wordsMap = strs.reduce((map, str) => {
       // const sortedChars = [...str].sort().join('');
       // map[sortedChars] = (map[sortedChars] || []).concat(str);
    //    return map;
  //  }, {});
   // return Object.values(wordsMap);
  
  let map = {}
  for(let s of strs){
    const key = s.split("").sort().join("")
    if(map[key]){
      map[key].push(s)
    }else{
      map[key] = [s]
    }
  }
  return Object.values(map)
}