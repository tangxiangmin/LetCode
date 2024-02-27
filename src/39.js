/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 思路：使用递归，终止条件是target 本身在candidates中存在，则直接返回1
var combinationSum = function (candidates, target) {
    if (target <= 0) {
        return false
    }
    var ans = []
    var set = new Set()
    for (var i = 0; i < candidates.length; ++i) {
        var cur = candidates[i]
        // 根据题意，数组中的元素均不重复
        if (cur === target) {
            ans.push([cur])
            continue
        }
        // 求子集
        var res = combinationSum(candidates, target - cur)
        if (res) {
            res.forEach(item => {
                var arr = item.concat(cur)
                // 重复的元素，可以进行剪枝
                var key = arr.sort((a, b) => a - b).join(',')
                if (!set.has(key)) {
                    ans.push(arr)
                    set.add(key)
                }
            })
        }
    }
    return ans
};

// 思路2：上面的递归存在优化空间，
var combinationSum = function (candidates, target) {
    let ans = []
    const cache = {}

    const map = {}
    function dfs(arr, n) {
        if (n < 0) {
            return
        }
        if (n === 0) {
            const list = [...arr]
            const key = list.sort((a, b) => a - b).join(',')
            if (!map[key]) {
                ans.push(list)
                map[key] = true
            }
            return
        }

        for (const num of candidates) {
            arr.push(num)
            dfs(arr, n - num)
            arr.pop(num)
        }
    }
    dfs([], target)
    return ans
};

var candidates = [2, 3, 6, 7], target = 7
candidates = [2, 3, 5], target = 8
var res = combinationSum(candidates, target)

console.log(JSON.stringify(res))