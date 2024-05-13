/**
 * @param {string} s
 * @return {boolean}
 */
// 最多只有一个字符的数量为奇数，其余的都为偶数
var canPermutePalindrome = function (s) {
    const map = {}
    for (const ch of s) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }
    let flag = false
    for (const key in map) {
        if (map[key] % 2 == 1) {
            if (!flag) {
                flag = true
            } else {
                return false
            }
        }
    }
    return true

};