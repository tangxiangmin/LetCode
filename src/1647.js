/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    const map = {}
    for (const ch of s) {
        if (!map[ch]) {
            map[ch] = 0
        }
        map[ch]++
    }

    const arr = Object.values(map).sort((a, b) => b - a)

    let prev = arr[0]
    let ans = 0
    for (let i = 1; i < arr.length; ++i) {
        const cur = arr[i]
        const diff = Math.max(Math.min(cur, prev - 1), 0)
        ans += cur - diff
        prev = diff
    }
    return ans

};

var s = "aaabbbcc"
s = "ceabaacb"
var ans = minDeletions(s)
console.log(ans)