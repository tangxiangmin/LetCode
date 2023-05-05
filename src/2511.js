/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
    var len = forts.length;
    var max = 0;
    for (var i = 0; i < len; ++i) {
        var cur = forts[i];
        if (cur === 1 || cur === -1) {
            var j = i + 1;
            var target = cur === 1 ? -1 : 1;
            while (j < len) {
                if (forts[j] === target) {
                    console.log(i, j);
                    max = Math.max(j - i - 1, max);
                    break;
                } else if (forts[j] !== 0) {
                    break;
                }
                j++;
            }
            i = j - 1;
        }
    }
    return max;
};

var forts = [1, 0, 0, -1, 0, 0, 0, 0, 1];
// forts = [0, 0, 1, -1];
forts = [1, 0, 0, -1, 0, 0, -1, 0, 0, 1];
var ans = captureForts(forts);

console.log(ans);
