/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  //let obj = {}
  //for(let str of strs){
    //if(/^\d+$/.test(str)) obj[str] = +str
     //else obj[str] = str.length
  //}
  //return Math.max(...Object.values(obj))
  
  
  
    let result = 0;
    const regex = /^\d+$/;
    for (let i = 0; i < strs.length; ++i) {
        result = Math.max(result, regex.test(strs[i]) ? +strs[i] : strs[i].length);
    }
    return result;

};