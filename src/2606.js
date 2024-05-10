/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
// 跟53的子数组最大和基本一致
// 可以预处理每个字符串的val值
var maximumCostSubstring = function (s, chars, vals) {

    const dp = []
    const n = s.length
    let ans = 0
    const valMap = getValMap()
    for (let i = 0; i < n; ++i) {
        const ch = s[i]
        dp[i] = valMap[ch] + Math.max(i === 0 ? 0 : dp[i - 1], 0)
        ans = Math.max(dp[i], ans)
    }
    return ans


    function getValMap() {
        const valMap = {}
        for (let i = 0; i < vals.length; ++i) {
            const ch = chars[i]
            valMap[ch] = vals[i]
        }
        const start = 'a'.charCodeAt(0)
        const end = 'z'.charCodeAt(0)
        for (let i = start; i <= end; ++i) {
            const ch = String.fromCharCode(i)
            if (valMap[ch] === undefined) {
                valMap[ch] = i - start + 1
            }
        }
        return valMap
    }

};

var s = "abc", chars = "abc", vals = [-1, -1, -1]
var ans = maximumCostSubstring(s, chars, vals)
console.log(ans)