const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
// 思路，使用两个最小堆，一个保存可使用的位置，一个保存被占用的位置
var smallestChair = function (times, targetFriend) {
    const queue = new MinPriorityQueue()
    const n = times.length
    for (let i = 0; i < n; ++i) {
        queue.enqueue(i, i)
        times[i].push(i) // 保存标签
    }

    times.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    // console.log(JSON.stringify(times))
    const jobs = new MinPriorityQueue()

    for (const [arrival, leave, i] of times) {

        while (!jobs.isEmpty()) {
            const { element, priority } = jobs.front()
            if (priority <= arrival) {
                jobs.dequeue()
                queue.enqueue(element, element)
            } else {
                break
            }
        }

        const { element } = queue.dequeue()
        if (i === targetFriend) {
            return element
        }
        jobs.enqueue(element, leave)
    }
};
var times = [[1, 4], [2, 3], [4, 6]], targetFriend = 1
times = [[3, 10], [1, 5], [2, 6]], targetFriend = 0 // 2
times = [[33889, 98676], [80071, 89737], [44118, 52565], [52992, 84310], [78492, 88209], [21695, 67063], [84622, 95452], [98048, 98856], [98411, 99433], [55333, 56548], [65375, 88566], [55011, 62821], [48548, 48656], [87396, 94825], [55273, 81868], [75629, 91467]], targetFriend = 6


var ans = smallestChair(times, targetFriend)
console.log(ans)