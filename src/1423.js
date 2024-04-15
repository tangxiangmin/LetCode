/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// 感觉可以dfs，很显然会超时时间限制
var maxScore = function (cardPoints, k) {

    let ans = 0
    function dfs(i, j, sum, k) {
        if (k === 0) {
            ans = Math.max(ans, sum)
            return
        }
        dfs(i + 1, j, sum + cardPoints[i], k - 1)

        dfs(i, j - 1, sum + cardPoints[j], k - 1)
    }

    const n = cardPoints.length

    dfs(0, n - 1, 0, k)
    return ans
};

// 加缓存优化，还是会超时
var maxScore = function (cardPoints, k) {
    const n = cardPoints.length
    const cache = {}
    function dfs(i, j, k) {
        const key = `${i},${j},${k}`
        if (cache[key]) return cache[key]
        // 最后一张牌，肯定选大的
        if (k === 1) {
            return Math.max(cardPoints[i], cardPoints[j])
        }
        if (k === 0) return 0

        let l = cardPoints[i] + dfs(i + 1, j, k - 1)
        let r = cardPoints[j] + dfs(i, j - 1, k - 1)
        const val = Math.max(l, r)
        cache[key] = val
        return val
    }

    return dfs(0, n - 1, k)
}
// 逆向思维，最后剩下的肯定是中间连续的n-k张牌，只要他们分数最小，则拿走的分数最大
// 逆向的思维很妙啊！
var maxScore = function (cardPoints, k) {
    const n = cardPoints.length
    k = n - k

    let sum = 0
    for (let i = 0; i < k; ++i) {
        sum += cardPoints[i]
    }
    let min = sum
    let total = sum
    for (let i = k; i < n; ++i) {
        sum += cardPoints[i]
        total += cardPoints[i]

        sum -= cardPoints[i - k]
        min = Math.min(sum, min)
    }
    return total - min
}
var cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3
var ans = maxScore(cardPoints, k)
console.log(ans)