/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    const vowelList = [];
    const sArray = s.split('');
    
    for (let char of s) {
        if (vowels.includes(char)) {
            vowelList.push(char);
        }
    }
    
    
    const vowelCount = Array(256).fill(0);
    for (let vowel of vowelList) {
        vowelCount[vowel.charCodeAt(0)]++;
    }
    
    const sortedVowels = [];
    for (let i = 0; i < 256; i++) {
        while (vowelCount[i] > 0) {
            sortedVowels.push(String.fromCharCode(i));
            vowelCount[i]--;
        }
    }
        
    let vowelIndex = 0;

    for (let i = 0; i < sArray.length; i++) {
        if (vowels.includes(sArray[i])) {
            sArray[i] = sortedVowels[vowelIndex++];
        }
    }
        
    return sArray.join('');
};