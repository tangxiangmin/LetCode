/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
// 对于每两个点i与j之间的距离，共有三种可能的最短路径：
// 直接从i直线到达j；
// 从i到达x点，由x到达y,再从y到达j;
// 从i到达y点，由y到达x,再从x到达j;
// 分别计算每种走法的距离求最小值，即两点之间的最短距离。两两之间各自计算并统计。
var countOfPairs = function(n, x, y) {

};