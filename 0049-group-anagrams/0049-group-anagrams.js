/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs){
    const wordsMap = strs.reduce((map, str) => {
        const sortedChars = [...str].sort().join('');
        map[sortedChars] = (map[sortedChars] || []).concat(str);
        return map;
    }, {});

    return Object.values(wordsMap);
}