/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 看起来是个回溯问题，从开头开始，依次组合，
// 如果能走到最后，返回true，
// 否则返回上一层，如果回到了开头，返回false
var validPartition = function (nums) {
    const len = nums.length
    function backtrack(startIndex) {
        if (startIndex === len) return true
        // 两个相等
        let c1 = false
        if (startIndex + 1 < len && nums[startIndex] == nums[startIndex + 1]) {
            c1 = backtrack(startIndex + 2)
        }
        // 三个相等
        let c2 = false
        if (startIndex + 2 < len && nums[startIndex] == nums[startIndex + 1] && nums[startIndex] === nums[startIndex + 2]) {
            c2 = backtrack(startIndex + 3)
        }

        // 三个递增
        let c3 = false
        if (startIndex + 2 < len && nums[startIndex] + 1 === nums[startIndex + 1] && nums[startIndex + 1] + 1 === nums[startIndex + 2]) {
            c3 = backtrack(startIndex + 3)
        }
        return c1 || c2 || c3
    }
    return backtrack(0)
};
// 要超时，这种拆分问题的方法，可以考虑一下dp
var validPartition = function (nums) {
    const n = nums.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        if (i >= 2) {
            dp[i] = dp[i - 2] && validTwo(nums[i - 2], nums[i - 1]);
        }
        if (i >= 3) {
            dp[i] = dp[i] || (dp[i - 3] && validThree(nums[i - 3], nums[i - 2], nums[i - 1]));
        }
    }
    return dp[n];

    function validTwo(num1, num2) {
        return num1 === num2;
    }

    function validThree(num1, num2, num3) {
        return (num1 === num2 && num1 === num3) || (num1 + 1 === num2 && num2 + 1 === num3);
    }
};

var validPartition = function (nums) {
    const n = nums.length
    const dp = new Array(n + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= n; ++i) {
        if (i >= 2) {
            dp[i] = dp[i - 2] && nums[i - 1] === nums[i - 2]
        }
        if (i >= 3) {
            dp[i] = dp[i] || (dp[i - 3] && ((nums[i - 1] === nums[i - 2] && nums[i - 2] === nums[i - 3]) || (nums[i - 3] + 1 === nums[i - 2] && nums[i - 2] + 1 == nums[i - 1])))
        }
    }
    return dp[n]
}



var nums = [4, 4, 4, 5, 6]  // true
// nums = [1, 1, 1, 2]  // false
// nums = [803201, 803201, 803201, 803201, 803202, 803203]
var ans = validPartition(nums)
console.log(ans)