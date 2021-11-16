/**
 * @param {string} boxes
 * @return {number[]}
 */
// 思路：BF,好像是个求和的
var minOperations = function (boxes) {
    var len = boxes.length;
    var ans = [];
    for (var i = 0; i < len; ++i) {
        var step = 0;
        for (var j = 0; j < len; ++j) {
            if (boxes[j] === "1") {
                step += Math.abs(j - i);
            }
        }
        ans[i] = step;
    }
    return ans;
};
var boxes = "110"
boxes = "001011"
var ans = minOperations(boxes)
console.log(ans)