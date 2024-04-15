// 参考题解 正难则反，考虑最多保留多少个元素不变
var minOperations = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let j = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j++] = nums[i]; // 原地去重
        }
        console.log(nums)
    }

    let ans = 0, left = 0;
    for (let i = 0; i < j; i++) {
        while (nums[left] < nums[i] - n + 1) { // nums[left] 不在窗口内
            left++;
        }
        ans = Math.max(ans, i - left + 1);
    }
    return n - ans;
};

// 默写
var minOperations = function (nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let j = 1
    for (let i = 1; i < n; ++i) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    let ans = 0 // 最多保留的元素个数
    let left = 0
    // 数组的前j个是不相同的
    for (let i = 0; i < j; ++i) {
        const x = nums[i]
        // 则连续数组的区间应该是[x - (n - 1), x]
        while (nums[left] < x - (n - 1)) {
            left++
        }
        ans = Math.max(ans, i - left + 1)
    }
    return n - ans
}
