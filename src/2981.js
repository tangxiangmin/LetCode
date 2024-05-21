/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口找字符相同的子字符串
var maximumLength = function (s) {
    const n = s.length
    let l = 0
    let r = 0
    const map = {}
    while (r < n) {
        const ch = s[l]

        while (s[r] === s[l]) {
            r++
        }
        const len = r - l

        if (!map[ch]) map[ch] = []
        map[ch].push(len)

        l = r
        r++
    }
    const ch = s[l]
    if (!map[ch]) map[ch] = []
    map[ch].push(r - l)

    let ans = 0
    for (const key in map) {
        const list = map[key]
        list.sort((a, b) => b - a)
        list.push(0)
        list.push(0)
        ans = Math.max(ans, list[0] - 2, Math.min(list[0] - 1, list[1]), list[2])
    }
    return ans === 0 ? -1 : ans
};
var s = "aaaa"
s = "abcdef"
s = "abcaba"
s = "eccdnmcnkl"
s = "ceeeeeeeeeeeebmmmfffeeeeeeeeeeeewww"
var ans = maximumLength(s)
console.log(ans)