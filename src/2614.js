/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    var row = nums.length;
    if (!row) return 0;
    var col = nums[0].length;
    var diagonal = [];
    for (var i = 0; i < col; ++i) {
        diagonal.push(nums[i][i]);
        diagonal.push(nums[i][nums.length - i - 1]);
    }

    diagonal.sort((a, b) => a - b);
    for (var i = diagonal.length - 1; i >= 0; --i) {
        var flag = diagonal[i] !== 1;
        for (var j = 2; j < diagonal[i]; j++) {
            if (diagonal[i] % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return diagonal[i];
        }
    }
    return 0;
};

var nums = [
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
];
nums = [
    [1, 2, 3],
    [5, 17, 7],
    [9, 11, 10],
];
var ans = diagonalPrime(nums);
console.log(ans);
