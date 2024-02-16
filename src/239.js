const {
    PriorityQueue,
} = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// BF
var maxSlidingWindow = function (nums, k) {

    var l = 0
    var r = k
    var ans = []
    for (; r <= nums.length; l++, r++) {
        ans.push(Math.max(...nums.slice(l, r)))
    }
    return ans

};

// 利用滑动, 这种做法在k比较大的时候体验不太好
var maxSlidingWindow = function (nums, k) {
    var l = 0
    var r = k
    var ans = []
    var maxIndex = 0
    for (var i = l; i < k; ++i) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i
        }
    }
    for (; r <= nums.length; l++, r++) {
        if (maxIndex === l - 1) {
            maxIndex = l
            for (var i = l; i < r; ++i) {
                if (nums[i] > nums[maxIndex]) {
                    maxIndex = i
                }
            }
        } else if (nums[maxIndex] < nums[r - 1]) {
            maxIndex = r - 1
        }

        ans.push(nums[maxIndex])

    }
    return ans
};



// 优先队列
var maxSlidingWindow = function (nums, k) {

    const priorityQueue = new PriorityQueue((a, b) => b.val - a.val);
    for (let i = 0; i < k; ++i) {
        priorityQueue.enqueue({ index: i, val: nums[i] })
    }
    var ans = [priorityQueue.front().val]
    for (var i = k; i < nums.length; ++i) {
        priorityQueue.enqueue({ index: i, val: nums[i] })

        var max = priorityQueue.front()
        if (max.index === i) {
            priorityQueue.dequeue()
        }
        ans.push(max.val)

    }
    return ans
}

// 单调队列
var maxSlidingWindow = function (nums, k) {
    const result = [];
    const monoQueue = [];

    for (let i = 0; i < nums.length; i++) {
        // 维护单调递减队列
        while (monoQueue.length > 0 && nums[i] > monoQueue[monoQueue.length - 1]) {
            monoQueue.pop();
        }

        monoQueue.push(nums[i]);

        // 移除超出窗口范围的元素
        if (i >= k - 1) {
            result.push(monoQueue[0]);
            if (nums[i - k + 1] === monoQueue[0]) {
                monoQueue.shift();
            }
        }
    }

    return result;

}

var nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// nums = [1], k = 1

var ans = maxSlidingWindow(nums, k)
console.log(ans)