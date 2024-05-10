/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 直接拼接k次数组，然后题目会变成最大子数组和的问题，但是这个时间复杂度太高了
// 参考题解 https://leetcode.cn/problems/k-concatenation-maximum-sum/solutions/70400/java-kadanesuan-fa-yu-jie-ti-si-lu-by-zdxiq125/
var kConcatenationMaxSum = function (arr, k) {
    var len = arr.length, sum = 0;
    var cur = 0, res = 0;
    var loopCount = Math.min(2, k) * len;
    for (var i = 0; i < len; ++i) sum += arr[i];
    for (var i = 0; i < loopCount; ++i) {
        var val = arr[i % len];
        cur = cur + val > 0 ? cur + val : 0;
        res = Math.max(res, cur);
    }
    if (sum > 0) {
        while (k-- > 2) {
            res = (res + sum) % 1000000007;
        }
    }
    return res % 1000000007;
};
var arr = [1, 2], k = 3
// var arr = [-1, -2], k = 7
var ans = kConcatenationMaxSum(arr, k)
console.log(ans)