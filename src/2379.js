/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    var ans = Infinity;
    for (var i = 0; i <= blocks.length - k; ++i) {
        var sum = 0;
        for (var j = i; j < i + k; ++j) {
            if (blocks[j] === "W") {
                sum++;
            }
        }

        if (sum < ans) {
            ans = sum;
        }
    }
    return ans;
};

var blocks = "WBBWWBBWBW",
    k = 7; // [1,2,2,2,1,1,1]
// blocks = "WBWBBBW", k = 2
// blocks ="BWWWBB", k = 6
var ans = minimumRecolors(blocks, k);
console.log(ans);
