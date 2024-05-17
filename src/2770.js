/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
    const n = nums.length

    const cache = {}
    const val = dfs(n - 1)
    return val === -Infinity ? -1 : val

    function dfs(j) {
        if (j === 0) return 0
        if (cache[j] !== undefined) return cache[j]
        let res = -Infinity

        for (let i = 0; i < j; ++i) {
            if (Math.abs(nums[i] - nums[j]) <= target) {
                res = Math.max(res, dfs(i) + 1)
            }
        }
        cache[j] = res
        return res
    }
};
var nums = [1, 3, 6, 4, 1, 2], target = 2
// nums = [1, 3, 6, 4, 1, 2], target = 3
// nums = [1, 3, 6, 4, 1, 2], target = 0
// nums = [1, 0, 2], target = 1
// nums = [1151004, -368271873, -959137308, -363298760, 860913529, 875734893, 653205161, -726919163, -107413863, -142574923, 535616977, -527647589, -933518315, 622674836, -626420393, 718010621, 443503514, 324638485, 303398068, 404393712, -682845482, 957378126, 254180033, 527664388, 204099822, 59043697, 284163204, -18806397, 54466771, 218940186, 122932328, -527134788, 748489009, 481143527, -91930114, 650935932, 49918996, 838929409, 298033606, 135544915, -231923297, -564040431, -403686128, -779212295], target = 1152175137

var ans = maximumJumps(nums, target)
console.log(ans)