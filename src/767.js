/**
 * @param {string} s
 * @return {string}
 */

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// 统计每个字符的数量，按出现频率挨个拼接
var reorganizeString = function (s) {
    const map = {}
    for (const ch of s) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }
    const queue = new MaxPriorityQueue()
    for (const ch in map) {
        queue.enqueue(ch, map[ch])
    }
    let ans = ''
    while (!queue.isEmpty()) {
        let { element: a, priority: ap } = queue.dequeue()
        ans += a
        ap--
        if (queue.isEmpty()) break
        let { element: b, priority: bp } = queue.dequeue()
        ans += b
        bp--
        if (bp > 0) {
            queue.enqueue(b, bp)
        }
        if (ap > 0) {
            queue.enqueue(a, ap)
        }
    }
    if (ans.length === s.length) return ans
    return ''
};
var s = "aab"
s = "aaab"
var ans = reorganizeString(s)
console.log(ans)