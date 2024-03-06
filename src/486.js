/**
 * @param {number[]} nums
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/predict-the-winner/solution/yu-ce-ying-jia-by-leetcode-solution/
// 每回合都做策略，可以考虑回溯，看看到最后有没有分数更大的策略
var predictTheWinner = function(nums) {

    function walk(l, r, turn) {
        if (l === r) {
            return nums[l] * turn
        }

        var scoreStart = nums[l] * turn + walk(l + 1, r, -turn);
        var scoreEnd = nums[r] * turn + walk(l, r - 1, -turn);
        return Math.max(scoreStart * turn, scoreEnd * turn) * turn;
    }

    return walk(0, nums.length - 1, 1) >= 0;
};

var nums = [1, 5, 2]
nums = [1, 5, 233, 7]
var ans = predictTheWinner(nums)
console.log(ans)