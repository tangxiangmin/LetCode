const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// 参考题解，使用最小堆
var kSmallestPairs = function (nums1, nums2, k) {
    const q = new MinPriorityQueue({
        compare: (o1, o2) => {
            return nums1[o1[0]] + nums2[o1[1]] - nums1[o2[0]] - nums2[o2[1]]
        }
    })

    var m = nums1.length
    var n = nums2.length
    for (var i = 0; i < Math.min(m, k); i++) {
        q.enqueue([i, 0])
    }

    const ans = []
    while (k-- > 0 && !q.isEmpty()) {
        const [i, j] = q.dequeue();
        ans.push([nums1[i], nums2[j]]);
        if (j + 1 < n) {
            q.enqueue([i, j + 1])
        }
    }
    return ans

};