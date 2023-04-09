/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const d = new Map();
    for (const c of key) {
        if (c === ' ' || d.has(c)) {
            continue;
        }
        d.set(c, String.fromCharCode('a'.charCodeAt(0) + d.size));
    }
        d.set(' ', ' ');
    return [...message].map(v => d.get(v)).join('');
    
};