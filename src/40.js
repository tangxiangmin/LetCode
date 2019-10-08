/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 与39类似，区别在于每个元素只能使用一次，因此在使用递归时需要将当前拼接的组合传进去
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    var ans = step(target, candidates)
    var map = {}
    return ans.filter(item => {
        var key = item.sort((a, b) => a - b)
        if (map[key]) {
            return false
        }
        map[key] = true
        return true
    })

    function step(target, candidates) {
        if (target <= 0) {
            return false
        }
        var ans = []
        for (var i = 0; i < candidates.length; ++i) {
            var cur = candidates[i]
            if (cur === target) {
                ans.push([cur])
                continue
            }
            if (cur > target) {
                break
            }
            var sub = candidates.slice()
            sub.splice(i, 1)
            var res = step(target - cur, sub)
            if (res) {
                res.forEach(item => {
                    var arr = item.concat(cur)
                    ans.push(arr)
                })
            }
        }
        return ans
    }
};

var candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
// candidates = [1, 1], target = 1
var res = combinationSum2(candidates, target)
console.log(res)