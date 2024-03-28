/**
 * @param {number[][]} ranges
 * @return {number}
 */

// 先将有重叠部分的区域合并，再进行2组划分
var countWays = function (ranges) {
    ranges.sort((a, b) => {
        return a[0] - b[0]
    })


    let prev = ranges[0]
    let len = 1
    for (let i = 1; i < ranges.length; ++i) {
        const head = ranges[i]
        if (prev[1] >= head[0]) {
            prev = [prev[0], Math.max(head[1], prev[1])]
        } else {
            prev = head
            len++
        }
    }

    // group中的每个元素，都可以选择是分到第一组还是第二组，因此答案是2^len个
    const mod = 1e9 + 7
    let ans = 1
    for (let i = 0; i < len; ++i) {
        ans = (ans * 2) % mod
    }
    return ans
};

var ranges = [[6, 10], [5, 15]]
ranges = [[1, 3], [10, 20], [2, 5], [4, 8]]
ranges = [[0, 0], [8, 9], [12, 13], [1, 3]]
var ans = countWays(ranges)
console.log(ans)