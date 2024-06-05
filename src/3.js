/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function (s) {
    var l = 0;
    var r = 0;
    var cur = "";
    var max = cur;
    while (r < s.length) {
        var c = s[r]
        r++;
        var idx = cur.indexOf(c);
        if (idx === -1) {
            cur += c;
        } else {
            // 遇见第一个重复的，则移动左指针
            l++;
            if (max.length < cur.length) {
                max = cur;
            }
            cur = cur.substr(idx + 1) + c;
        }
    }
    if (max.length < cur.length) {
        max = cur;
    }
    return max.length;
};

var lengthOfLongestSubstring = function (s) {
    var l = 0;
    var r = 0;
    var sub = "";
    var ans = -Infinity;
    while (r < s.length) {
        var ch = s[r];
        var idx = sub.indexOf(ch);
        if (idx > -1) {
            l++;
            ans = Math.max(sub.length, ans);
            sub = sub.substr(idx + 1) + ch;
        } else {
            sub += ch;
        }
        r++;
    }
    ans = Math.max(sub.length, ans);
    return ans
};

var lengthOfLongestSubstring = function (s) {
    const map = {}

    let l = 0
    let r = 0
    const n = s.length
    let ans = 0
    while (r < n) {
        const ch = s[r]
        r++
        if (!map[ch]) map[ch] = 0
        map[ch]++

        if (map[ch] > 1) {
            while (s[l] !== ch) {
                const d = s[l]
                l++
                map[d]--
            }
            map[ch]--
            l++
        }
        ans = Math.max(ans, r - l)
    }
    return ans
};

var s = "abcabcbb"
s = "bbbbb"
s = "pwwkew"
// s = 'cdd'
s = "tmmzuxt"
var ans = lengthOfLongestSubstring(s)
console.log(ans)