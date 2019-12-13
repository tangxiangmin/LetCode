/**
 * @param {string} s
 * @return {string[]}
 */
// 思路：需要了解ip地址的格式，
// 通过三个点分隔成4位，每位不能超过255
var restoreIpAddresses = function (s) {

    return combine(s, 4).map(item => item.join('.'))

    // 将s组合成num位满足题意的组合
    function combine(s, num) {
        var len = s.length

        if (!s || len < num || len > num * 3) return []
        if (num === 1) {
            if (len > 1 && s[0] === '0') return []
            return +s <= 255 ? [[s]] : []
        }
        var cur = ''
        var ans = []
        for (var i = 0; i < 3; ++i) {
            if (cur === '0') { continue }
            cur += s[i]
            if (+cur <= 255) {
                var res = combine(s.slice(i + 1), num - 1)
                if (Array.isArray(res) && res.length) {
                    ans = ans.concat(res.map(item => {
                        item.unshift(cur)
                        return item
                    }))
                }
            }
        }
        return ans
    }
};

var s = "25525511135"
// ["0.1.0.010","0.1.00.10","0.1.001.0","0.10.0.10","0.10.01.0","0.100.1.0","01.0.0.10","01.0.01.0","01.00.1.0","010.0.1.0"]
s = "010010" // ["0.10.0.10","0.100.1.0"]
// [255,255,111,35], [255,255,11,135]
// [2,5,5,2xxx]=> [25,5,2,5xxx]=>
var res = restoreIpAddresses(s)
console.log(res)