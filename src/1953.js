/**
 * @param {number[]} milestones
 * @return {number}
 */
// 回溯
var numberOfWeeks = function (milestones) {
    // 耗时最长工作所需周数
    const longest = Math.max(...milestones);
    // 其余工作共计所需周数
    const rest = milestones.reduce((acc, cur) => acc + cur, 0) - longest;
    if (longest > rest + 1) {
        // 此时无法完成所耗时最长的工作
        return rest * 2 + 1;
    } else {
        // 此时可以完成所有工作
        return longest + rest;
    }
};

var milestones = [1, 2, 3]
milestones = [5, 2, 1]
milestones = [9, 3, 6, 8, 2, 1]
var ans = numberOfWeeks(milestones)
console.log(ans)