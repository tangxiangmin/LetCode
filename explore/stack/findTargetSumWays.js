/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 这种方式会在某些测试用例下会超时
var findTargetSumWays2 = function(nums, S) {
    var ans = [];
    var len = nums.length
    nums = nums.filter(item => item > 0);

    var zeroNum = len - nums.length;

    function dfs(nums, target, prev) {
        var arr = nums.slice();
        if (arr.length === 0) {
            if(target === 0){
                // 保存题解
                ans.push(prev);
            }
            return;
        }

        var top = arr.pop();
        var clone1 = prev;
        if(top === target){
            clone1.push(-top);
        }else if(top === -target){
            clone1.push(top);
        }
        dfs(arr, target - top, clone1);
        dfs(arr, target + top, clone1);
    }

    dfs(nums, S, []);
    return ans.length * Math.pow(2, zeroNum);
};

// 参考 https://blog.csdn.net/stillxjy/article/details/85029954
// 将问题转化成 求数组中所有数的子集的和为targetsum的子集总数，其中targetsum = (原数组元素之和 - S) / 2
var findTargetSumWays = function(nums, S) {
    var ans = 0
    function dfs(nums, d, n, curSum, target){
        if(d >= n){
            if(curSum ===  target){
                ans++
            }
            return
        }
        if(curSum > target){
            return 
        }
        if(curSum === target){
            ans += 1
            return
        }
        for(var i = d; i < n; ++i){
            if(nums[i] > 0){
                dfs(nums, i + 1, n, curSum + nums[i], target);
            }
        }
    }

    var n = nums.length
    var zeroNum = 0; // 计算0的个数
    var sum = 0
    var arr = []
    for(var i =0 ;i < n; ++i){
        sum += nums[i]
        if(nums[i] === 0){
            zeroNum++
        }else {
            arr.push(nums[i])
        }
    }
    if (S < -sum || S > sum || (sum - S) % 2 == 1) return 0; // 处理不符合条件的情况

    var targetsum = (sum - S) / 2;

    dfs(arr, 0, n, 0, targetsum);

    return ans * Math.pow(2, zeroNum);
}

var nums = [1, 1, 1,1,1];
var S = 3;

// nums = [1]
// S = 2;

// nums = [1,2,1]
// S = 0

// nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// S = 0

// nums = [19,32,36,7,37,10,44,21,40,39,39,18,5,34,3,40,33,2,46,46]
// S = 29

// nums = [10,34,28,5,10,26,9,17,28,10,9,6,10,15,0,28,42,39,25,19]
// S = 26

console.log(findTargetSumWays(nums, S));

console.log(findTargetSumWays2(nums, S));