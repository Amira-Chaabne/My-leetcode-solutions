/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let obj = {}
  for(let str of strs){
    if(/^\d+$/.test(str)) obj[str] = +str
     else obj[str] = str.length
  }
  return Math.max(...Object.values(obj))
};