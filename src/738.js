/**
 * @param {number} N
 * @return {number}
 */

// 找到小于N且从左到右各位递增的最大的数字
// 假设高位数字为i
// 1234->1234
// 110->000
// 7879->7779
// 332->299
// 要满足结果最大，则尽可能保证高分位取值相同
// ans比N的每个位上的数都要小一些，且高分位的值比低分位的值更小，因此从头开始遍历

// todo 这个代码有bug
var monotoneIncreasingDigits = function (N) {
    var str = N.toString()
    var ans = []
    var len = str.length
    for (var i = len - 1; i >= 0; --i) {
        var ch = str[i]
        var next = ans[0]
        if (next) {
            // 保证高位的数据小于等于低位的数据
            if (ch <= next) {
                ans.unshift(ch)
            } else {
                ans.unshift(next)
            }
        } else {
            ans.unshift(ch)
        }
    }
    var res
    // 处理ans所有位都相同的情况，需要将除第一位后的所有位都修改为9
    var start = ans[0]
    if (start === '0' || ans.every(ch => ch === start)) {
        // 当ans全为0时，需要减一位
        if (start === '0' && str[0] === '1') {
            res = ''
        } else {
            res = str[0] - 1
        }
        // 后面所有位都置位9
        for (var i = 0; i < len - 1; ++i) {
            res += '9'
        }
    } else {
        res = ans.join("")
    }
    return res
};

var N = 1234 //1234
// N = 10 // 9
// N = 7879 // 7779
// N= 332 // 299
// N = 20
// N = 60
// N = 99
// N = 31
// N = 101
N = 120
var res = monotoneIncreasingDigits(N)
console.log(res)