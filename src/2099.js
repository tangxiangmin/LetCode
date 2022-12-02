/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 思路：要不改变顺序
var maxSubsequence = function (nums, k) {
    var ans = [];
    for (var i = 0; i < nums.length; ++i) {
        if (ans.length < k) {
            ans.push(nums[i]);
        } else {
            var min = Math.min.apply(null, ans);
            if (min < nums[i]) {
                for (var j = 0; j < k; ++j) {
                    if (min === ans[j]) {
                        ans.splice(j, 1);
                        ans.push(nums[i]);
                        break;
                    }
                }
            }
        }
    }
    return ans;
};

var nums = [2, 1, 3, 3],
    k = 2;
(nums = [3, 4, 3, 3]), (k = 2);
(nums = [-1, -2, 3, 4]), (k = 3);
var ans = maxSubsequence(nums, k);

console.log(ans);
