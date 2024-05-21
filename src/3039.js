/**
 * @param {string} s
 * @return {string}
 */
// 模拟一下
// 每一轮都会删除至少一个字符，
var lastNonEmptyString = function (s) {
    const map = {}
    const n = s.length

    let maxLen = 0
    let maxKeys = []
    for (let i = 0; i < n; ++i) {
        const ch = s[i]
        if (!map[ch]) map[ch] = 0
        map[ch]++
        if (map[ch] > maxLen) {
            maxKeys = [ch]
            maxLen = map[ch]
        } else if (map[ch] === maxLen) {
            maxKeys.push(ch)
        }
    }
    return maxKeys.join('')
};
var s = "aabcbbca"
var ans = lastNonEmptyString(s)
console.log(ans)