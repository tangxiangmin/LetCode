/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// 思路：可以先考虑移除从num中移除1位数满足剩下的数字最小，然后在从剩下的数字中移除1位树...
// 移除1位数满足剩下的数字最小，则需要移除一个较高位的较大数，
// 如143，移除比1大的4；如413，移除4，需要注意包含0的情况
var removeKdigits = function (num, k) {
    var ans = num
    for (var i = 0; i < k; ++i) {
        ans = removeOnedigits(ans)
    }
    return ans
    function removeOnedigits(num) {
        var i = 0
        // 找到高位比较大的值
        while (i < num.length - 1 && num[i] <= num[i + 1]) {
            i++
        }
        var sub = num.slice(0, i) + num.slice(i + 1)

        // 移除开头的0
        var j = 0
        while (j < sub.length && sub[j] == '0') { j++ }

        return sub.slice(j) || "0"
    }
};
var num = "1432219", k = 3
// num = "10200", k = 1
// num = "10", k = 2
// num = "43214321", k = 4

var res = removeKdigits(num, k)
console.log(res)