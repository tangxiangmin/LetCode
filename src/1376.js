/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
// 先构造树，然后通过计算 informTime的时间和
// 同级节点的通知时间是可以合并的
var numOfMinutes = function (n, headID, manager, informTime) {
    var map = {}
    for (var i = 0; i < manager.length; ++i) {
        var label = manager[i]
        if (i !== headID) {
            if (!map[label]) {
                map[label] = []
            }
            map[label].push(i)
        }
    }

    function dfs(id, cost) {
        if (!Array.isArray(map[id])) return cost
        var max = -Infinity
        for (var child of map[id]) {
            var ans = dfs(child, cost + informTime[id])
            if (max < ans) {
                max = ans
            }
        }
        return max
    }
    return dfs(headID, 0)
};

var n = 6, headID = 2, manager = [2, 2, -1, 2, 2, 2], informTime = [0, 0, 1, 0, 0, 0]
// n = 1, headID = 0, manager = [-1], informTime = [0]

// n = 15
// headID = 0
// manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
// informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]

var ans = numOfMinutes(n, headID, manager, informTime)
console.log(ans)