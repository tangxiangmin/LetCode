// 给定一个由1和0组成的二维数组，1代表陆地，找到面积最大的陆地
// 思路：先找到水平方向上连续最大值，及竖直方向上连续最大值，最大面积必在他们所围成的区域中，面积减去0个数目即可
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var row = grid.length,
    col = grid[0].length;

    // 数组中连续为1的最大长度的索引值
  function findContinus(arr) {
    var len = arr.length;
    
  }

  let res = 0;
  for (var i = 0; i < row; ++i) {
    for (var j = 0; j < col; ++j) {}
  }
};
