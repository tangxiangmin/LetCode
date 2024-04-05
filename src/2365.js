/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
// 在完成每个类型的任务时，需要休息的天数
var taskSchedulerII = function (tasks, space) {
    const n = tasks.length
    const last = {}

    let ans = 0
    for (let i = 0; i < n; ++i) {
        const t = tasks[i]
        ans += 1
        if (last[t]) {
            ans = Math.max(last[t] + space + 1, ans)
        }
        last[t] = ans
    }
    return ans
};
var tasks = [1, 2, 1, 2, 3, 1], space = 3
// tasks = [5,8,8,5], space = 2
var ans = taskSchedulerII(tasks, space)
console.log(ans)