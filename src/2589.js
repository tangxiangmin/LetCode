/**
 * @param {number[][]} tasks
 * @return {number}
 */
// 同一个时间点可以运行多个任务
// 参考题解，先未实现
var findMinimumTime = function (tasks) {
    tasks.sort((a, b) => {
        return a[1] - b[1]
    })
    console.log(JSON.stringify(tasks))
};

var tasks = [[2, 3, 1], [4, 5, 1], [1, 5, 2]]
var ans = findMinimumTime(tasks)
console.log(ans)