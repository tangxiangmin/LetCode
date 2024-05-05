/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
// 动态规划
var jobScheduling = function (startTime, endTime, profit) {
    const n = startTime.length
    const jobs = startTime.map((_, i) => {
        return [startTime[i], endTime[i], profit[i]]
    })

    // 按结束时间排序
    jobs.sort((a, b) => a[1] - b[1])

    // dp[i]标签选择前i个工作的最大收益，题目答案即为dp[n]
    const dp = [0]
    for (let i = 1; i <= n; ++i) {
        // 如果要选择当前工作，需要找到前面最后一个结束时间要小于等于当前工作开始时间的工作j
        let j = i - 1
        while (j >= 0 && jobs[j][1] > jobs[i - 1][0]) {
            j--
        }
        dp[i] = Math.max(dp[i - 1], dp[j + 1] + jobs[i - 1][2])
    }
    return dp[n]
};

// 在查询j的过程中，由于jobs结束时间本身是有序的，因此可以使用二分
var jobScheduling = function (startTime, endTime, profit) {
    const n = startTime.length
    const jobs = startTime.map((_, i) => {
        return [startTime[i], endTime[i], profit[i]]
    })

    jobs.sort((a, b) => a[1] - b[1])

    const dp = [0]
    for (let i = 1; i <= n; ++i) {
        // 如果要选择当前工作，需要找到前面最后一个结束时间要小于等于当前工作开始时间的工作
        // 使用二分，找到小于等于target的右边界
        let l = 0
        let r = i - 1
        let target = jobs[i - 1][0]
        while (l <= r) {
            const mid = (l + r) >> 1
            if (jobs[mid][1] <= target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        dp[i] = Math.max(dp[i - 1], dp[r + 1] + jobs[i - 1][2])
    }
    return dp[n]
};
var startTime = [1, 2, 3, 3], endTime = [3, 4, 5, 6], profit = [50, 10, 40, 70]
var ans = jobScheduling(startTime, endTime, profit)
console.log(ans)