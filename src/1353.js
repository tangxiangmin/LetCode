/**
 * @param {number[][]} events
 * @return {number}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// 首先使用贪心，将开始时间相同的会议排在一起，按照最小堆，优先选择堆顶的天数
var maxEvents = function (events) {
    const n = events.length
    const pq = new MinPriorityQueue()

    events.sort((a, b) => a[0] - b[0])

    let ans = 0
    let cur = 1
    let i = 0
    while (i < n || !pq.isEmpty()) {

        while (i < n && events[i][0] === cur) {
            pq.enqueue(events[i][1], events[i][1])
            i++
        }
        while (!pq.isEmpty() && pq.front().element < cur) {
            pq.dequeue()
        }
        if (!pq.isEmpty()) {
            pq.dequeue()
            ans++
        }
        cur++
    }
    return ans
};
var events = [[1, 2], [1, 2], [3, 3], [1, 5], [1, 5]]
var ans = maxEvents(events)
console.log(ans)