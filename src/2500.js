/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    var row = grid.length;
    if (!row) return 0;
    var col = grid[0].length;
    var ans = 0;
    for (var i = 0; i < row; ++i) {
        var nums = grid[i];
        grid[i].sort((a, b) => a - b);
    }
    while (col >= 0) {
        var max = 0;
        for (var i = 0; i < row; ++i) {
            var nums = grid[i];
            if (max < nums[nums.length - 1]) {
                max = nums[nums.length - 1];
            }
            grid[i] = nums.slice(0, nums.length - 1);
        }
        ans += max;
        col--;
    }
    return ans;
};

var grid = [
    [1, 2, 4],
    [3, 3, 1],
];
grid = [[10]]
var ans = deleteGreatestValue(grid);
console.log(ans);
