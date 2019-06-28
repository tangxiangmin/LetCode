/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
// bf解法 n^4太慢了
var fourSumCount2 = function(A, B, C, D) {
    var len = A.length; // 所有数组长度相同
    var ans = 0;
    for (var i = 0; i < len; ++i) {
        for (var j = 0; j < len; ++j) {
            for (var k = 0; k < len; ++k) {
                for (var l = 0; l < len; ++l) {
                    if (A[i] + B[j] + C[k] + D[l] === 0) {
                        ans++;
                    }
                }
            }
        }
    }
    return ans;
};

// 空间换时间
var fourSumCount = function(A, B, C, D) {
    var map = new Map();
    for (var i = 0; i < C.length; i++) {
        for (var j = 0; j < D.length; j++) {
            var sum = C[i] + D[j];
            if (map.has(sum))
                map.set(sum, map.get(sum) + 1);
            else
                map.set(sum, 1);
        }
    }

    var ans = 0;
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            if (map.has(-A[i] - B[j])) {
                ans += map.get(-A[i] - B[j]);
            }
        }
    }
    return ans;
};

var A = [1, 2], B = [-2, -1], C = [-1, 2], D = [0, 2];
var res = fourSumCount(A, B, C, D);

console.log(res);
