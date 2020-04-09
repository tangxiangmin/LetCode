/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路一：BF，在nums = [4,2,1]，target = 32测试用例时会堆栈溢出
var combinationSum4 = function (nums, target) {
    var arr = calc(nums, target);
    return arr.length;
    function calc(nums, target) {
        var ans = [];
        for (var i = 0; i < nums.length; ++i) {
            var num = nums[i];
            if (target === num) {
                ans.push([num]);
            } else if (target > num) {
                var arr = calc(nums, target - num);
                Array.isArray(arr) &&
                    arr.forEach((row) => {
                        ans.push([num, ...row]);
                    });
            }
        }
        return ans;
    }
};
// 思路2：添加缓存，已经计算过的target不再参与计算，同时减少数组操作，解决了BF的问题，
// 但在[3,33,333]，10000会超时
var combinationSum4 = function (nums, target) {
    let cache = {};
    return calc(nums, target);
    function calc(nums, target) {
        if (cache[target]) return cache[target];
        var ans = 0;
        for (var i = 0; i < nums.length; ++i) {
            var num = nums[i];
            if (target === num) {
                ans++;
            } else if (target > num) {
                var res = calc(nums, target - num);
                if (res > 0) {
                    ans += res;
                }
            }
        }
        cache[target] = ans;
        return ans;
    }
};

// 思路3
// dp[i]表示target为i时对应的组合数
// dp[i]=dp[i-nums[0]]+dp[i-nums[1]]+dp[i-nums[2]]+...
var combinationSum4 = function (nums, target) {
    var dp = [1];
    for (var i = 1; i <= target; ++i) {
        dp[i] = 0;
        nums.forEach((num) => {
            if (i - num >= 0) {
                dp[i] += dp[i - num];
            }
        });
    }
    return dp[target];
};

var nums = [1, 2, 3];
var target = 4;
// nums = [4, 2, 1];
// target = 32;
// nums = [3, 33, 333];
// target = 10000;
var res = combinationSum4(nums, target);
console.log(res);
