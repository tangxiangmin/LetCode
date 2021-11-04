/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    arr.sort((a, b) => a - b);

    var len = arr.length;

    var sum = 0;
    var start = len * 0.05;
    var end = len * 0.95;
    for (let i = start; i <= end - 1; ++i) {
        sum += arr[i];
    }
    return sum / (end - start);
};

var arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];

arr = [
    4, 8, 4, 10, 0, 7, 1, 3, 7, 8, 8, 3, 4, 1, 6, 2, 1, 1, 8, 0, 9, 8, 0, 3, 9,
    10, 3, 10, 1, 10, 7, 3, 2, 1, 4, 9, 10, 7, 6, 4, 0, 8, 5, 1, 2, 1, 6, 2, 5,
    0, 7, 10, 9, 10, 3, 7, 10, 5, 8, 5, 7, 6, 7, 6, 10, 9, 5, 10, 5, 5, 7, 2,
    10, 7, 7, 8, 2, 0, 1, 1,
];

var ans = trimMean(arr);
console.log(ans);
