/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  // Brut force solution
   // for(let i = 1; i <= n; i++) {
        //if(guess(i) === 0) {
       //     return i;
      //  }
   // }
  
  // Binary search solution
    let low = 1;
    let high = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let result = guess(mid);

        if (result == 0) {
            return mid;
        } else if (result == -1) {
            high = mid - 1;
        } else if (result == 1) {
            low = mid + 1;
        }
    }
  };