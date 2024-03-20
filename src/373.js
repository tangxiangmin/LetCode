const { MinPriorityQueue } = require('@datastructures-js/priority-queue')
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// BF,在超长测试用例时会出现GC错误
var kSmallestPairs = function (nums1, nums2, k) {
    var ans = [];
    for (var i = 0; i < nums1.length; ++i) {
        for (var j = 0; j < nums2.length; ++j) {
            ans.push([nums1[i], nums2[j]]);
        }
    }
    return ans.sort((a, b) => a[0] + a[1] - (b[0] + b[1])).slice(0, k);
};

// 思路2 既然给定的数组是排序的，快慢指针交替前进，找到k个数就可以了
var kSmallestPairs = function (nums1, nums2, k) {
    var ans = [];
    var len1 = nums1.length;
    for (var i = 0; i < len1; ++i) {
        var next = i + 1 < len1 ? nums1[i + 1] + nums2[0] : Infinity;
        for (var j = 0; j < nums2.length; ++j) {
            if (nums1[i] + nums2[j] > next) {
                break;
            }
            ans.push([nums1[i], nums2[j]]);
            if (ans.length === k) {
                return ans;
            }
        }
    }
    return ans;
};

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

var nums1 = [1, 7, 11],
    nums2 = [2, 4, 6],
    k = 3;
// nums1 = [1, 1, 2];
// nums2 = [1, 2, 3];
// k = 10;

var ans = kSmallestPairs(nums1, nums2, k);

console.log(JSON.stringify(ans));
