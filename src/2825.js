/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
// 双指针
var canMakeSubsequence = function (str1, str2) {
    const n2 = str2.length
    let j = 0

    for (const ch of str1) {
        const c = ch !== 'z' ? String.fromCharCode(ch.charCodeAt(0) + 1) : 'a'
        if (ch === str2[j] || c === str2[j]) {
            j++
            if (j === n2) return true
        }
    }
    return false
};