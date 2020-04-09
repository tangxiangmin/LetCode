/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix;
    this.cache = {};
    this.createKey = (...args) => {
        return args.join(",");
    };
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    var key = this.createKey(row1, col1, row2, col2);
    if (this.cache[key] !== undefined) return this.cache[key];

    var sum = 0;
    const { matrix } = this;
    for (var i = row1; i <= row2; ++i) {
        for (var j = col1; j <= col2; ++j) {
            sum += matrix[i][j];
        }
    }
    this.cache[key] = sum;
    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// 解法二，使用智能缓存
// 其中两位值的row1和col1为0，0
// sum(abcd)=sum(od)−sum(ob)−sum(oc)+sum(oa)

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix;
    var row = matrix.length;
    if (!row) return;
    var col = matrix[0].length;
    var sum = new Array(row + 1);
    for (var i = 0; i < row + 1; ++i) {
        let row = new Array(col + 1);
        if (i == 0 || i == row) {
            row.fill(0);
        } else {
            row[0] = 0;
            row[col] = 0;
        }
        sum[i] = row;
    }
    // sum[i][j] 表示从matrix[0][0] 到matrix[j][j]所组成子矩阵的和
    for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
            sum[i + 1][j + 1] =
                sum[i + 1][j] + sum[i][j + 1] + matrix[i][j] - sum[i][j];
        }
    }
    console.log(sum);
    this.sum = sum;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let dp = this.sum;
    if (!dp) return 0;

    return (
        dp[row2 + 1][col2 + 1] -
        dp[row2 + 1][col1] -
        dp[row1][col2 + 1] +
        dp[row1][col1]
    );
};

var matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
];

new NumMatrix(matrix);
