/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // So bad solution :/ , nested loops with time complexity of O(n^2)
     // for(let i=0; i<arr.length; i++){
         // for(let j=0; j<arr.length; ++j){
            // console.log({i, j}) // check this
             // if (i != j) {
                // if (arr[i] == 2 * arr[j]) {
                    // return true;
                 // }
             // }
         // }
     // }
     // return false
    
   	const set = new Set();
	for (let value of arr) {
		if (set.has(2 * value) || set.has(value / 2)) {
			return true;
		}
		set.add(value);
	}
	return false;
};