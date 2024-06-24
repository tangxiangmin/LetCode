/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    const dp = [1, 1]
    while (dp[dp.length - 1] <= k) {
        const val = dp[dp.length - 1] + dp[dp.length - 2]
        dp.push(val)
    }
    if (dp[dp.length - 1] === k) return 1
    dp.pop()
    let ans = 0

    let r = dp.length - 1
    // 每轮选择最大的比k小的那个值
    while (k > 0) {
        r = findR(r, k)
        ans++
        k -= dp[r]
    }
    return ans


    function findR(r, target) {
        let l = 0
        while (l <= r) {
            const mid = (l + r) >> 1
            const val = dp[mid]
            if (val === target) {
                return mid
            } else if (val > target) {
                r = mid - 1
            } else if (val < target) {
                l = mid + 1
            }
        }
        return r
    }
};


var k = 7
k = 10
var ans = findMinFibonacciNumbers(k)
console.log(ans)
