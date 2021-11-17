/**
 * @param {number[]} gain
 * @return {number}
 */
// 感觉是个前缀和
var largestAltitude = function (gain) {
    var prefixSum = [0];
    for (var i = 0; i < gain.length; ++i) {
        prefixSum[i + 1] = prefixSum[i] + gain[i];
    }
    return Math.max(...prefixSum)
};

var gain = [-5,1,5,0,-7]
gain = [-4,-3,-2,-1,4,3,2]
var ans = largestAltitude(gain)
console.log(ans)