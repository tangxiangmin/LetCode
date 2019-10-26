/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// 思路：最理想的操作应该是在n个步骤内，连续执行不同的任务，但是考虑任务的个数可能不足n个，因此需要执行待定操作

// 执行所有任务的最短时间应由出现频率最高的元素的个数max决定，即至少 (max-1)*n + 剩余为处理的单个任务
var leastInterval = function (tasks, n) {
    var map = {}
    var max = tasks[0] // 出现次数最多的元素
    tasks.forEach(task => {
        if (!map[task]) map[task] = 0
        map[task]++

        if (map[task] > map[max]) {
            max = task
        }
    })
    var left = 0
    for (var key in map) {
        if (map[key] === map[max]) {
            left++
        }
    }
    var ans = (map[max] - 1) * (n + 1) + left
    return Math.max(ans, tasks.length) // 至少需要执行tasks.length的长度
};

var tasks = ["A", "A", "A", "B", "B", "B"], n = 2
var tasks = ["A","A","A","B","B","B"], n =0
var res = leastInterval(tasks, n)
console.log(res)