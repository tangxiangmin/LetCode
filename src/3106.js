/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 思路：贪心模拟
// 将越前面的字符变成a是最优的，如果某个字符串变成a之后的距离超出了限制，则尝试变成b...修改完成后继续处理下一个字符
var getSmallestString = function (s, k) {
    const a = 'a'.charCodeAt(0)
    let ans = ''
    for (const ch of s) {
        if (k > 0) {
            const c = update(ch)
            if (c !== '') {
                ans += c
                continue
            }
        }
        ans += ch
    }
    return ans

    // ch到a的最小距离
    function dis(ch, start) {
        const c = ch.charCodeAt(0)
        return Math.min(start + 26 - c, c - start)
    }

    function update(ch) {
        for (let i = a; i < a + 26; ++i) {
            const v = dis(ch, i)
            if (v <= k) {
                k -= v
                return String.fromCharCode(i)
            }
        }
        return ''
    }
};
var s = "zbbz", k = 3
var ans = getSmallestString(s, k)
console.log(ans)