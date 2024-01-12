/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
 const first = s.slice(0, s.length / 2);
 const second = s.slice(s.length / 2);

 const checkFirst = (first.match(/[aeiou]/ig) || []).length;
 const checkSecond = (second.match(/[aeiou]/ig) || []).length;

 return checkSecond === checkFirst;
};
