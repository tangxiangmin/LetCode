// 填色游戏
// 给定一个二维数组的填色板，一个起始坐标和颜色，输出填色后的结果
// input
// [[1,1,1],
// [1,1,0],
// [1,0,1]]
// (sr = 1), (sc = 1), (newColor = 2);
// result
// [[2, 2, 2],
// [2, 2, 0],
// [2, 0, 1]];

// 思路：实际上就是找到给定点连接的相同值
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  var row = image.length,
    col = image[0].length;

  function fill(val, newVal, x, y) {
    if (x < 0 || x >= col || y < 0 || y >= row) {
        return false
    }
    if (image[y][x] !== val){
        return false
    }
    image[y][x] = newVal
    fill(val, newVal, x+1, y);
    fill(val, newVal, x-1, y);
    fill(val, newVal, x, y+1);
    fill(val, newVal, x, y-1);
  }

  var origin = image[sr][sc]
  if (origin != newColor){
    fill(origin, newColor, sc, sr);
  }

  return image;
};

var image = [
    [0, 0, 0], 
    [0, 1, 1]];
// [[1,1,1],
// [1,1,0],
// [1,0,1]];

var res = floodFill(image,1,1,1);
console.log(res)