/**
 * @param {number[]} arr
 * @return {number}
 */
// 感觉前缀和可以解决
var sumOddLengthSubarrays = function (arr) {
    var len = arr.length;

    var ans = 0;
    var sum = 0;

    // 前缀和
    var prefixSum = [0];
    for (var i = 0; i < len; ++i) {
        sum += arr[i];
        prefixSum[i + 1] = sum;
    }
    var k = 1;
    while (k <= len) {
        for (var i = 0; i <= len - k; ++i) {
            ans += prefixSum[i + k] - prefixSum[i];
        }
        k += 2;
    }
    return ans
};

var arr = [1, 4, 2, 5, 3];
arr = [1,2]
arr = [10,11,12]
var ans = sumOddLengthSubarrays(arr);

console.log(ans)