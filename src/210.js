/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// 思路：DFS，终止条件为没有任何依赖于当前课程的节点，插入栈中
var findOrder = function (numCourses, prerequisites) {
    // var depsA = {}
    var depsB = {};
    prerequisites.forEach((item) => {
        var [c1, c2] = item;
        // if(!depsA[c1]) depsA[c1] = []
        // depsA[c1].push(c2) // c1课程依赖的课程列表

        if (!depsB[c2]) depsB[c2] = [];
        depsB[c2].push(c1); // 保留所有依赖于c2的课程
    });

    var ans = [];
    var visited = {}; // 每个节点的搜索状态 0 未搜索 1 搜索中 2 已完成
    var invalid = false
    for (var i = 0; i < numCourses && !invalid; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }
    if(invalid) return  []

    return ans.reverse();

    function dfs(c) {
        visited[c] = 1;
        if (depsB[c]) {
            // 遍历所有依赖于c的课程
            for (var node of depsB[c]) {
                if (!visited[node]) {
                    dfs(node)
                    if(invalid) return 
                } else if (visited[node] === 1) {
                    invalid = true
                    return;
                }
            }
        }
        visited[c] = 2
        ans.push(c);
    }
};
var numCourses = 4,
    prerequisites = [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ];
var numCourses =2, prerequisites = [[0,1],[1,0]]
var res = findOrder(numCourses, prerequisites);
console.log(res);
