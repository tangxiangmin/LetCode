/**
 * @param {number[][]} edges
 * @return {number}
 */
// 思路，看起来是找到每个边共同的点
var findCenter = function (edges) {
    var [p1, p2] = edges;
    if (p1[0] === p2[0] || p1[0] === p2[1]) {
        return p1[0];
    } else {
        return p1[1];
    }
};
