/**
 * @param {number[]} A
 * @return {number}
 */
// 思路1：BF
var maxScoreSightseeingPair = function(A) {
    var max = -Infinity
    for(var i = 0; i < A.length-1; ++i){
        for(var j = i+1; j < A.length; ++j){
            var score = A[i]+A[j] + i - j
            if(max < score){
                max = score
            }
        }
    }
    return max
};
// 思路2：BF解法会超时，
// res = A[i] + A[j] + i - j （i < j）可以分解为 (A[i] + i ) + (A[j] -j)这两个都是固定值
var maxScoreSightseeingPair = function(A) {
    var ans = 0
    var preMax =A[0]+0
    for(var i = 1; i < A.length; ++i){
        ans = Math.max(ans, preMax + A[i] - i)
        preMax = Math.max(preMax, A[i]+i)
    }
    return ans
}

