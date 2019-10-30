/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 思路：要使最后的结果最大，应优先选择值绝对值较大的父值，如果存在剩余的m次操作，则取m%2作用于绝对值最小的元素
var largestSumAfterKNegations = function (A, K) {
    var nonnegative = []
    var negative = []
    var ans = 0
    var min = Infinity
    A.forEach(num => {
        ans += num
        // 找到绝对值最小的元素
        if (min > Math.abs(num)) {
            min = Math.abs(num)
        }
        num < 0 ? negative.push(num) : nonnegative.push(num)
    })
    negative.sort((a, b) => a - b)
    var i = 0

    while (i < K && i < negative.length) {
        ans += 2 * (-negative[i])
        i++
    }
    if ((K - i) % 2 > 0) {
        ans -= 2 * min
    }
    return ans
};
var A = [4, 2, 3], K = 1
A = [-8, 3, -5, -3, -5, -2], K = 6
var res = largestSumAfterKNegations(A, K)
console.log(res)