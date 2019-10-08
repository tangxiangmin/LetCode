/**
 * @param {number[][]} wall
 * @return {number}
 * 本题参考评论区
 *  0.可以将问题转化为，穿过最多的缝隙
 *  1.遍历每一行砖块，记录缝隙的横向位置
 *  2.拥有最多相同的缝隙位置时，穿过砖块儿的数量就是最少的
 */
var leastBricks = function (wall) {
    var dicMap = {}
    for (var i = 0; i < wall.length; ++i) {
        var sum = 0
        for (var j = 0; j < wall[i].length - 1; ++j) {
            sum += wall[i][j]
            if (!dicMap[sum]) {
                dicMap[sum] = 0
            }
            dicMap[sum]++
        }
    }
    var ans = -Infinity
    for (var key in dicMap) {
        var val = dicMap[key]
        ans = Math.max(val, ans)
    }
    return ans === -Infinity ? wall.length : wall.length - ans
};

var wall = [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]
var res = leastBricks(wall)
console.log(res)