/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// 求s可以组成的最少和最长的回文子字符串[left,right]，如果k在该范围内，则返回true
var canConstruct = function (s, k) {
    const map = {}
    for (const ch of s) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }

    // 需要包含全部字符，所以最少个数就是奇数字符的个数
    let left = 0
    for (const ch in map) {
        if (map[ch] % 2 === 1) {
            left++
        }
    }
    const right = s.length
    left = Math.max(left, 1)
    return left <= k && k <= right
};
var s = "true", k = 4
s = "yzyzyzyzyzyzyzy", k = 2
var ans = canConstruct(s, k)

console.log(ans)