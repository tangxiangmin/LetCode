/**
 * @param {number[]} piles
 * @return {number}
 */
// 每个人可以选1堆或者两堆，
// 如果拿了某几堆石子后，剩下对手能得到的石子数最少，那么自己能得到的石子数就是最多的，这就是题目中【发挥出最佳水平】的意思
// dfs(i,m)表示从piles[i]开始拿石子，m与题意相同，选择前1<=x<2m
var stoneGameII = function (piles) {
    const n = piles.length
    const posSum = [] // 后缀和
    let sum = 0
    for (let i = n - 1; i >= 0; --i) {
        sum += piles[i]
        posSum[i] = sum
    }

    // console.log(posSum)
    const cache = {}
    function dfs(i, m) {
        // 可以全拿的话，就全部拿走，这样对手只能拿到0，这个才是最有选择，也是递归的终止条件
        if (i + m * 2 >= n) {
            return posSum[i]
        }
        const key = `${i},${m}`
        if (cache[key]) return cache[key]


        let min = Infinity
        for (let x = 1; x <= m * 2; ++x) {
            min = Math.min(min, dfs(i + x, Math.max(x, m)))
        }
        cache[key] = posSum[i] - min
        return cache[key]

    }
    return dfs(0, 1)
};

var piles = [2, 7, 9, 4, 4]
var ans = stoneGameII(piles)
console.log(ans)