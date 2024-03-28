/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// 思路：模拟上下车情况，从左向右移动，因此对trips按from进行排序
// 同时使用一个最小堆排列已经上车的人，当每队乘客上车的时候，从堆中移除可以下车的人
// 上车时减少capacity，下车时增加 capacity，判断capacity 是否副歌条件
var carPooling = function (trips, capacity) {
    trips.sort((a, b) => a[1] - b[1])

    let queue = new MinPriorityQueue()
    for (let i = 0; i < trips.length; ++i) {
        const [num, from, to] = trips[i]
        // 先下
        while (!queue.isEmpty()) {
            const { element, priority } = queue.front()
            if (priority <= from) {
                queue.dequeue()
                capacity += element
            } else {
                break
            }
        }
        // 后上
        if (capacity < num) return false
        capacity -= num
        queue.enqueue(num, to)

    }
    return true
};

var trips = [[2, 1, 5], [3, 3, 7]], capacity = 4
trips = [[2, 1, 5], [3, 3, 7]], capacity = 5
trips = [[2, 1, 5], [3, 5, 7]], capacity = 3
var ans = carPooling(trips, capacity)
console.log(ans)