/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
// 思路，先工作的先处理时间较长的任务
var minProcessingTime = function (processorTime, tasks) {
    tasks.sort((a, b) => b - a)
    processorTime.sort((a, b) => a - b)


    const n = tasks.length
    let j = 0
    let ans = 0
    for (let i = 0; i < n; i += 4) {
        ans = Math.max(ans, tasks[i] + processorTime[j])
        j++
    }
    return ans
};
var processorTime = [8, 10], tasks = [2, 2, 3, 1, 8, 7, 4, 5]
processorTime = [10,20], tasks = [2,3,1,2,5,8,4,3]
var ans = minProcessingTime(processorTime, tasks)
console.log(ans)