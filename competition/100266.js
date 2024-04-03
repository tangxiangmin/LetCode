/**
 * @param {number[]} nums
 * @return {number}
 */

// 看起来可以用dp
// 使用dfs(i,j)保存[i,j]范围内的子数组数量
var countAlternatingSubarrays = function (nums) {
    var n = nums.length;
    var ans = 0;
    // i 是交替子数组的右端点，j 是最左的左端点
    for (i = 0, j = 0; i < n; i++) {
        // 上一个数和当前数一样，左端点必须移动到当前数
        if (i > 0 && nums[i] == nums[i - 1]) j = i;
        // 计算以 i 为右端点的交替子数组有几个
        ans += i - j + 1;
    }
    return ans;
};



var nums = [0, 1, 1, 1] // [1,1] -> [0],[0,1],[0,1,1] 对于dp[i][j]，在头部加上一个元素后，新增 j-i+1个元素
// dp[0][2] = dp[0][1] + nums[2]===nums[1] ? 0 : 1-0+1
// dp[1][3] = dp[0][3] - nums[0]===nums[1] ? 0 : 3-0+1
// dp[i][j] = dp[i][j+1] + nums[i] === nums[j+1] ? 0 : j+1-i + 1
// 知道了 dp[i][j] 则可以推断出 dp[i-1][j] 和 dp[i][j+1]

// nums = [1, 0, 1, 0]
// nums = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1] // 76
var ans = countAlternatingSubarrays(nums)
console.log(ans)