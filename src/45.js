/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：贪心算法，每一步都找到范围内最大的元素
var jump = function (nums) {
    if(nums.length == 1) return 0
    var i = 0;
    var ans = 0;
    while (i < nums.length) {
        var max = 0;
        if(i + nums[i] >= nums.length) break
        for (var j = i + 1; j <= i + nums[i]; ++j) {
            if (max < nums[j]) {
                max = nums[j];
            }
        }
        i += max;
        ans++;
    }

    return ans
};

var nums = [2, 3, 1, 1, 4];
nums = [2,3,0,1,4]

nums = [0]
nums = [2,1]
var ans = jump(nums);
console.log(ans);
