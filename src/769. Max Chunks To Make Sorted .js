/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let count = 0,
        sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i] - i;
        if (sum == 0) {
            sum = 0;
            count += 1;
        }
    }
    if (sum != 0) count += 1;
    return count;
};

var input = [1, 0, 2, 3, 4];
// input = [2, 0, 1]
input = [1, 2, 0, 3];
maxChunksToSorted(input);
