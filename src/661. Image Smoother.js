/**
 * Created by admin on 2017/10/1.
 */
// 给定二维矩阵代表图片灰度，输出每个点与其周围8个点的数的平均数向下取整，如果不足八个点（边缘线），则有多少算多少
    // 思考：BF，感觉很蛋疼，但是速度居然超过了93%的~。。。
var imageSmoother = function (M) {
    var row = M.length,
        col = M[0].length;

    var N = [];
    for (var i = 0; i < row; ++i) {
        N[i] = [];
        for (var j = 0; j < col; ++j){
            N[i][j] = getAvg(i,j)
        }
    }

    function getAvg(i, j) {
        var count = 1,
            sum = M[i][j];
        if (j - 1 >= 0) {
            count++;
            sum += M[i][j - 1];
        }
        if (j + 1 < col) {
            count++;
            sum += M[i][j + 1];
        }

        if (i - 1 >= 0) {
            count++;
            sum += M[i - 1][j];
        }
        if (i + 1 < row) {
            count++;
            sum += M[i + 1][j];
        }

        if (i > 0 && j > 0) {
            count++;
            sum += M[i - 1][j - 1];
        }
        if (i < row - 1 && j < col - 1) {
            count++;
            sum += M[i + 1][j + 1];
        }
        if (i > 0 && j < col - 1) {
            count++;
            sum += M[i-1][j+1];
        }
        if(i<row-1 && j> 0){
            count++;
            sum += M[i+1][j-1];
        }

        return Math.floor(sum/count);
    }

    return N;
};