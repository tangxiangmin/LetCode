/**
 * @param {number[][]} points
 * @return {boolean}
 */
// 使用向量
var isBoomerang = function (points) {
    var [[x1, y1], [x2, y2], [x3, y3]] = points;
  
    var v1 = [x2-x1,y2-y1]
    var v2 = [x3-x1,y3-y1]
    return v1[0] * v2[1] - v1[1] * v2[0] != 0;
};

var points = [
    [1, 1],
    [2, 3],
    [3, 2],
];

// points = [[1,1],[2,2],[3,3]]
points = [[0,1],[1,0],[1,1]]
points = [[73,31],[73,19],[73,45]]
var ans = isBoomerang(points);
console.log(ans);
