// 给定一个数组，找到其元素可以组成k-diff的对数，
// k-diff的定义：是一对值(i,j)满足|i-j| == k

// 思路：BF，使用一个map来记录已经出现的对数, 数据过大会超时


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    var res = 0,
        len = nums.length;

    nums = nums.sort((a, b) => { return a - b })

    for(var i = 0, j = 0; i < len-1; ++i){
        // 移动j
        j = Math.max(j, i + 1)
        while (j < len && nums[j] - nums[i] < k) {
            j++;
        }

        // 计算结果
        if (j < len && nums[j] - nums[i] == k){
            res++;
        }

        // 相同元素
        while (i + 1 < len && nums[i] == nums[i+1]){
            i++;
        }
    }
    return res;
};

var arr = [3, 1, 4, 1, 5];
// var arr = [1, 3, 1, 5, 4];
console.log(findPairs(arr, 2));