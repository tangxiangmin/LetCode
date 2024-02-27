/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
// 思路，主要是讲matchsticks 分成4个长度相等的组合
var makesquare = function (matchsticks) {
    const sum = matchsticks.reduce((acc, row) => {
        return acc + row
    }, 0)
    if (sum % 4 !== 0) return false
    const target = sum / 4 // 边长
    if (matchsticks.some(row => row > target)) return false // 不能折断火柴

    matchsticks.sort((a, b) => b - a);
    const edges = new Array(4).fill(0);
    // 从每条边开始，依次从matchsticks 找到某根火柴尝试
    const dfs = (index) => {
        // 所有火柴用完
        if (index === matchsticks.length) {
            return true;
        }
        for (let i = 0; i < edges.length; i++) {
            edges[i] += matchsticks[index];
            if (edges[i] <= target && dfs(index + 1)) {
                return true;
            }
            edges[i] -= matchsticks[index];
        }
        return false;
    };

    return dfs(0);
};

var matchsticks = [1, 1, 2, 2, 2]
var ans = makesquare(matchsticks)
console.log(ans)