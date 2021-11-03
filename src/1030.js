/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// 思路：遍历表格并计算每个格子的距离
var allCellsDistOrder = function (R, C, r0, c0) {
    var arr = [];
    for (var i = 0; i < R; ++i) {
        for (var j = 0; j < C; ++j) {
            arr.push({
                i,
                j,
                dis: calc(i, j),
            });
        }
    }

    return arr
        .sort((a, b) => a.dis - b.dis)
        .map(({ i, j }) => {
            return [i, j];
        });

    function calc(r, c) {
        return Math.abs(r - r0) + Math.abs(c - c0);
    }
};
