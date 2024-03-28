/**
 * @param {string} s
 * @return {number}
 */
// 哈希加快慢指针
var maximumLengthSubstring = function (s) {
    var slow = 0
    var fast = 0
    var map = {}
    let ans = 0
    while (fast < s.length) {
        var r = s[fast]
        var l = s[slow]
        if (!map[r]) {
            map[r] = 0
        }
        if (map[r] < 2) {
            map[r]++
            ans = Math.max(ans, fast - slow + 1)
            fast++
        } else {
            slow++
            map[l]--
        }
    }
    ans = Math.max(ans, fast - slow)
    return ans
};

var s = "bcbbbcba"
// s = "aaaa"
s = "acedc"
s = "aadaad"
// s = "bcbbbcba" // 4
var ans = maximumLengthSubstring(s)
console.log(ans)