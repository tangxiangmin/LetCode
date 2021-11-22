/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
// y = ax +b
// 根据公式判断是否在一个点上面 
var checkStraightLine = function (coordinates) {
    var [p1, p2] = coordinates;
    var [x1, y1] = p1;
    var [x2, y2] = p2;

    for (var i = 2; i < coordinates.length; ++i) {
        var [x, y] = coordinates[i];
        if ((y2 - y1) * (x - x1) !== (x2 - x1) * (y - y1)) return false;
    }
    return true;
};

var coordinates = [
    [0, 0],
    [0, 1],
    [0, -1],
];
var ans = checkStraightLine(coordinates);
console.log(ans);
