/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] == b[0]) {
            return b[1] - a[1] // 范围大的排前面
        }
        return a[0] - b[0]
    })

    const n = intervals.length

    let ans = 0
    for (let i = 0; i < n; ++i) {
        const [c, d] = intervals[i]
        let cnt = 1
        for (let j = i - 1; j >= 0; --j) {
            let [a, b] = intervals[j]
            if (b >= d) {
                cnt = 0
                break
            }
        }
        ans += cnt
    }
    return ans
};
var intervals = [[1, 4], [3, 6], [2, 8]]
intervals = [[1, 2], [1, 4], [3, 4]]
var ans = removeCoveredIntervals(intervals)
console.log(ans)