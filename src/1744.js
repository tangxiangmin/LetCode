/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// 思路：先模拟一下看看
var canEat = function (candiesCount, queries) {

    const preSums = [candiesCount[0]]
    const n = candiesCount.length
    for (let i = 1; i < n; ++i) {
        preSums[i] = preSums[i - 1] + candiesCount[i]
    }

    const ans = []
    for (const [type, day, max] of queries) {
        ans.push(check(type, day, max))
    }

    return ans

    function check(type, day, max) {
        // 可以吃的糖果数量范围在[x1, y1]
        const x1 = day + 1
        const y1 = x1 * max

        // 对应type糖果的数量范围在[x2, y2]
        const x2 = preSums[type - 1] + 1
        const y2 = preSums[type]

        // 两个数据区间有交集，则说明可以达到
        return !(x1 > y2 || x2 > y1)

    }
};

var candiesCount = [7, 4, 5, 3, 8], queries = [[0, 2, 2], [4, 2, 4], [2, 13, 1000000000]]
var ans = canEat(candiesCount, queries)
console.log(ans)