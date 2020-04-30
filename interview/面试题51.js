/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1：BF
var reversePairs = function (nums) {
    var ans = 0;
    for (var i = 0; i < nums.length - 1; ++i) {
        for (var j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[i]) ans++;
        }
    }
    return ans;
};
//
// 思路2：合并排序求逆序对 + 分治，阶梯
// [7,5,6,4] -> [7, 5] [6, 4] -> [7] [5] | [6] [4] -> 1 + 1 + ([5, 7] | [4, 6])
// [5, 7] 和 [4, 6] // 对两个数组进行合并排序
// = 2 + [4,] + 2 (left [5, 7] [6])-> 4 + [4, 5] + (left [7] [6]) -> 4 + 1 + [4,5,6] + (left [7])
// = 5 + [4,5,6,7]
var reversePairs = function (nums) {
    var ans = 0;

    walk(nums);

    return ans;
    function walk(nums) {
        if (nums.length < 2) {
            return nums;
        }

        var mid = nums.length >> 1;
        var r1 = walk(nums.slice(0, mid));
        var r2 = walk(nums.slice(mid));
        var res = merge(r1, r2);
        return res;
    }

    // 合并两个递增数组
    function merge(arr1, arr2) {
        var arr = [];
        var i = 0;
        var j = 0;
        var k = 0;
        var len = arr1.length + arr2.length;
        while (k < len) {
            if (i === arr1.length || (j < arr2.length && arr2[j] <= arr1[i])) {
                arr[k] = arr2[j];
                // 统计逆序对的个数
                for (var l = i; l < arr1.length; ++l) {
                    if (arr1[l] > arr2[j]) {
                        ans++;
                    }
                }
                j++;
            } else {
                arr[k] = arr1[i];
                i++;
            }
            k++;
        }

        return arr;
    }
};
var nums = [7, 5, 6, 4];
nums = [
    2147483647,
    2147483647,
    -2147483647,
    -2147483647,
    -2147483647,
    2147483647,
];
nums = [1, 3, 2, 3, 1];
var res = reversePairs(nums);
console.log(res);
