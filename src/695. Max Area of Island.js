// 给定一个由1和0组成的二维数组，1代表陆地，找到面积最大的陆地
// 思路：根据某个点的坐标找到相连的最大面积，然后遍历所有点，找最大值
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var row = grid.length,
    col = grid[0].length;

  // 保存访问记录
  var visit = []
  for (var i = 0; i < row; ++i){
    visit[i] = []
  }

  // 根据某个点的坐标找到相连的最大面积
  function findArea(x, y){
      if( x<0 ||x>=col || y<0|| y>=row || visit[y][x] || grid[y][x] ==0){
        return 0
      }

      visit[y][x] = true;
      return 1 + findArea(x+1, y) + findArea(x-1,y) + findArea(x, y+1) + findArea(x, y-1);
  }


  let res = 0;
  for (var i = 0; i < row; ++i) {
    for (var j = 0; j < col; ++j) {
      res = Math.max(res, findArea(j, i))
    }
  }
  return res;
};

maxAreaOfIsland([[]]);