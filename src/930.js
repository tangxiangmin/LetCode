/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
    var arr = []
    arr[0] = 0
    // 使用前缀和arr[i]，这样可以通过 arr[j + 1] - arr[i]快速获得A[i...j]的和
    for (var i = 0; i < A.length; ++i) {
        arr[i + 1] = arr[i] + A[i]
    }
    var count = {}
    var ans = 0
    // 对前缀和进行遍历，对于arr[j]而言，需要得到的是满足arr[j] = arr[i] + S 且 i < j 的 i 的数目，通过map实现
    for (var i = 0; i < arr.length; ++i) {
        var cur = arr[i]
        ans += count[cur] || 0
        var key = cur + S
        if (count[key] === undefined) {
            count[key] = 0
        }
        count[key]++
    }
    return ans
};

var A = [1, 0, 1, 0, 1], S = 2
A = [0, 0, 0, 0, 0]
S = 0
var res = numSubarraysWithSum(A, S)
console.log(res)