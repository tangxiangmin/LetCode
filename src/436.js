/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    var indexs = {} // 缓存索引值
    const n = intervals.length
    for (let i = 0; i < n; ++i) {
        const [start] = intervals[i]
        indexs[start] = i
    }

    const nums = intervals.map(row => row[0])
    nums.sort((a, b) => a - b)


    let ans = []
    for (let i = 0; i < n; ++i) {
        const [_, end] = intervals[i]
        ans[i] = find(end)
    }

    return ans

    function find(target) {
        let l = 0
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (nums[mid] >= target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        const start = nums[l]
        if (start >= target) {
            const key = indexs[start]
            return +key
        }
        return -1

    }
};
var intervals = [[3, 4], [2, 3], [1, 2]]
var ans = findRightInterval(intervals)
console.log(ans)