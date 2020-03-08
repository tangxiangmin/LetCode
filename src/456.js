/**
 * @param {number[]} nums
 * @return {boolean}
 * 要求 当 i < j < k 时，ai < ak < aj 的子序列，
 */
// 思路一：BF，部分用例会超时
// 首先找到一个满足 i < j && ai < aj, 然后从后面的序列中找到一个满足  aj > ak && ak > ai的元素
var find132pattern = function(nums) {
    var i = 0;
    while (i < nums.length) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] > nums[i]) {
                // 从后面找到一个满足条件的值
                for (let k = j + 1; k < nums.length; ++k) {
                    if (nums[j] > nums[k] && nums[k] > nums[i]) {
                        return true;
                    }
                }
            }
        }
        i++;
    }
    return false;
};


var arr = [3, 1, 4, 2];
var res = find132pattern(arr);
console.log(res);
