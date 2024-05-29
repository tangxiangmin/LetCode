/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// bf，会超时
var longestEqualSubarray = function (nums, k) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        let j = i + 1
        let cnt = k
        while (j < n && (nums[i] === nums[j] || cnt > 0)) {
            if (nums[i] !== nums[j]) {
                cnt--
            }
            j++
        }
        // 忽略中间被删掉的k-cnt个元素
        ans = Math.max(ans, j - i - (k - cnt))
    }
    return ans
}

// bf超时的原因是有每一轮对比完成后都是从下一个元素开始的，应该可以复用已经遍历过的内容
// 使用哈希表保存每个元素出现的索引值，然后遍历这个索引值列表，对于[i,j]区间list[i]-list[j] +1 - (i-j+1)<=k的话，就是一个符合题目要求的子数组
var longestEqualSubarray = function (nums, k) {
    const pos = new Map()
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        if (!pos.get(num)) pos.set(num, [])
        pos.get(num).push(i)
    }

    let ans = 0
    for (const list of pos.values()) {
        for (let i = 0, j = 0; i < list.length; ++i) {
            while (list[i] - list[j] - (i - j) > k) {
                j++
            }
            ans = Math.max(ans, i - j + 1)
        }
    }
    return ans
};


var nums = [1, 3, 2, 3, 1, 3], k = 3 // 3
nums = [1, 1, 2, 2, 1, 1], k = 2 // 4
// nums = [3, 2, 4, 2], k = 1
var ans = longestEqualSubarray(nums, k)
console.log(ans)