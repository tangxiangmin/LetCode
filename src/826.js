/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
// 对于worker[i]找到他可以做的难度的工作中，profit最高的
var maxProfitAssignment = function (difficulty, profit, worker) {
    const n = difficulty.length
    let ans = 0
    for (const w of worker) {
        ans += find(w)
    }
    return ans
    function find(d) {
        let max = 0
        for (let i = 0; i < n; ++i) {
            if (difficulty[i] <= d) {
                max = Math.max(profit[i], max)
            }
        }
        return max
    }
};

// 对difficulty排序，可以使用二分找到可以做的任务，然后再取利润最大值
var maxProfitAssignment = function (difficulty, profit, worker) {
    const n = difficulty.length
    const tasks = difficulty.map((d, index) => [d, profit[index]])
    tasks.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    let ans = 0
    for (const w of worker) {
        ans += find(w)
    }
    return ans
    function find(d) {
        let l = 0
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            const [difficult, p] = tasks[mid]
            if (difficult > d) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        let max = 0
        for (let i = 0; i <= r; ++i) {
            max = Math.max(max, tasks[i][1])
        }

        return max
    }
};

// 上面的二分好像没啥必要呢，直接对difficulty排序，然后再取利润最大值
var maxProfitAssignment = function (difficulty, profit, worker) {
    const n = difficulty.length
    const tasks = difficulty.map((d, index) => [d, profit[index]])
    tasks.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    let ans = 0
    for (const w of worker) {
        ans += find(w)
    }
    return ans
    function find(d) {
        let max = 0
        for (const [difficult, p] of tasks) {
            if (difficult > d) break
            max = Math.max(max, p)
        }
        return max

    }
};
var difficulty = [2, 4, 6, 8, 10], profit = [10, 20, 30, 40, 50], worker = [4, 5, 6, 7]
difficulty = [68, 35, 52, 47, 86], profit = [67, 17, 1, 81, 3], worker = [92, 10, 85, 84, 82]


var ans = maxProfitAssignment(difficulty, profit, worker)
console.log(ans)