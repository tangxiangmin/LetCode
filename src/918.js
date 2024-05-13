/**
 * @param {number[]} nums
 * @return {number}
 */
// 子数组最大和 环形数组版本，但是子数组中每个元素只能使用一次
// 参考的题解
// 如果题解子数组跨端了，那么其结果应该为sum(nums) - minS，因为字符数组加上剩余的minS，其和就为sum(nums)
var maxSubarraySumCircular = function (nums) {
    let maxS = Number.MIN_SAFE_INTEGER; // 最大子数组和，不能为空
    let minS = 0; // 最小子数组和，可以为空
    let maxF = 0, minF = 0, sum = 0;
    for (const x of nums) {
        // 以 nums[i-1] 结尾的子数组选或不选（取 max）+ x = 以 x 结尾的最大子数组和
        maxF = Math.max(maxF, 0) + x;
        maxS = Math.max(maxS, maxF);
        // 以 nums[i-1] 结尾的子数组选或不选（取 min）+ x = 以 x 结尾的最小子数组和
        minF = Math.min(minF, 0) + x;
        minS = Math.min(minS, minF);
        sum += x;
    }

    return sum === minS ? maxS : Math.max(maxS, sum - minS);

};
var nums = [1, -2, 3, -2]
nums = [5, -3, 5]
var ans = maxSubarraySumCircular(nums)
console.log(ans)