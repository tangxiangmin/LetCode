/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
// 每个小孩最多拿走一堆糖果，因此最大值是max(candies)，最小值是0，使用二分求最大值
var maximumCandies = function (candies, k) {
    const max = Math.max(...candies)
    let l = 0
    let r = max
    while (l <= r) {
        const mid = (l + r) >> 1
        if (check(mid)) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return r

    // 每人分得num
    function check(num) {
        let cnt = 0
        for (const c of candies) {
            cnt += Math.floor(c / num)
        }
        return cnt >= k
    }
};
var candies = [5, 8, 6], k = 3
candies = [2, 5], k = 11

var ans = maximumCandies(candies, k)
console.log(ans)