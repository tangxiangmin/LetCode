/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    var managerMap = {}; // 保存每个管理者对应的所有下级
    manager.forEach((id, idx) => {
        if (id == -1) return;
        if (!managerMap[id]) {
            managerMap[id] = [];
        }
        managerMap[id].push(idx);
    });
    console.log(managerMap);
    var queue = managerMap[headID];
    var ans = informTime[headID];
    while (queue.length) {
        var len = queue.length;
        console.log(queue)
        for (let i = 0; i < len; ++i) {
            var id = queue.shift();
            ans += informTime[id];
            queue = queue.concat(managerMap[id]);
        }
    }
    return ans;
};

var n = 15,
    headID = 0,
    manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

var res = numOfMinutes(n, headID, manager, informTime);

console.log(res)