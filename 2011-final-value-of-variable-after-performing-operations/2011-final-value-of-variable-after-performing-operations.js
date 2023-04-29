/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let res = 0;
    for(let op of operations){
      if(op === "++X" || op === "X++") res +=1
      else if ( op === "--X" || op === "X--" ) res -=1
    }
  return res
};