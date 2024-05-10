/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路一：BF，在nums = [4,2,1]，target = 32测试用例时会堆栈溢出
var combinationSum4 = function (nums, target) {
    var arr = calc(target);
    return arr.length;
    function calc(target) {
        var ans = [];
        for (var i = 0; i < nums.length; ++i) {
            var num = nums[i];
            if (target === num) {
                ans.push([num]);
            } else if (target > num) {
                var arr = calc(target - num);
                Array.isArray(arr) &&
                    arr.forEach((row) => {
                        ans.push([num, ...row]);
                    });
            }
        }
        return ans;
    }
};

// 优化dfs，添加缓存，但有的测试用例还是会超时
var combinationSum4 = function (nums, target) {

    const cache = {}

    return dfs(target)

    function dfs(target) {
        if (cache[target]) return cache[target]
        if (target === 0) return 1 // 已经结束了
        let cnt = 0
        for (const num of nums) {
            if (target >= num) {
                cnt += dfs(target - num)
            }
        }
        return cache[target] = cnt
    }
};

// 思路3，将上面的递归改成递推，这个题目本质上也是一个爬楼梯的过程
// dp[i]表示target为i时对应的组合数
// dp[i] = dp[i-nums[0]]+dp[i-nums[1]]+dp[i-nums[2]]+...
// dp[0] = 1
var combinationSum4 = function (nums, target) {
    var dp = [1]
    for (var i = 1; i <= target; ++i) {
        dp[i] = 0
        nums.forEach((num) => {
            if (i - num >= 0) {
                dp[i] += dp[i - num]
            }
        });
    }
    return dp[target];
};

var nums = [1, 2, 3], target = 4;
// nums = [4, 2, 1];
// target = 32;
// nums = [3, 33, 333];
// target = 10000;
var res = combinationSum4(nums, target);
console.log(res);
