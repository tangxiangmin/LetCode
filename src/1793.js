const { MinPriorityQueue } = require('@datastructures-js/priority-queue')
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// BF
var maximumScore = function (nums, k) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i <= k; ++i) {
        for (let j = k; j < n; ++j) {
            const min = Math.min(...nums.slice(i, j + 1))
            ans = Math.max(ans, min * (j - i + 1))
        }
    }
    return ans
};
// 求连续区间的最小值，感觉可以用最小堆
// 把整个数组按k分成两部分，分别保存前后两个区间距离k的最小值，
var maximumScore = function (nums, k) {
    const n = nums.length

    let ans = 0
    let front = []
    let back = []
    const q1 = new MinPriorityQueue()
    const q2 = new MinPriorityQueue()
    for (let i = k; i >= 0; --i) {
        q1.enqueue(nums[i], nums[i])
        front[i] = q1.front().element
    }
    for (let j = k; j < n; ++j) {
        q2.enqueue(nums[j], nums[j])
        back[j - k] = q2.front().element
    }

    // 这里还是会超时
    for (let i = 0; i <= k; ++i) {
        for (let j = k; j < n; ++j) {
            const min = Math.min(front[i], back[j - k])
            ans = Math.max(ans, min * (j - i + 1))
        }
    }
    return ans
}

// 参考上面的思路，从k向左右两边使用双指针
var maximumScore = function(nums, k) {
    let n = nums.length;
    let left = k - 1, right = k + 1;
    let ans = 0;
    for (let i = nums[k];; --i) {
        // 前面的数字比他大，向前挪动后最小值还是i，这样长度更长，因此值更大
        while (left >= 0 && nums[left] >= i) {
            --left;
        }
        // 同上
        while (right < n && nums[right] >= i) {
            ++right;
        }
        ans = Math.max(ans, (right - left - 1) * i);
        if (left === -1 && right === n) {
            break;
        }
    }
    return ans;
};


var nums = [1, 4, 3, 7, 4, 5], k = 3
// nums = [5, 5, 4, 5, 4, 1, 1, 1], k = 0
var ans = maximumScore(nums, k)
console.log(ans)