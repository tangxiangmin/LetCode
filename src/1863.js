/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    var len = nums.length;
    var ans = 0;
    dfs(0, 0);
    return ans;
    function dfs(val, idx) {
        if (idx === len) {
            ans += val;
            return;
        }
        dfs(val ^ nums[idx], idx + 1);
        dfs(val, idx + 1);
    }
};

var nums = [1, 3];
var ans = subsetXORSum(nums);
console.log(ans);
