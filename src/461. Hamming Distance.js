/**
 * https://leetcode.com/problems/hamming-distance/#/description
 */
var hammingDistance = function(x, y) {
    var res = x ^ y;
    var count = 0;
    for (var i = 0; i < 32; i++) {
        if ((res & 1) !== 0)
            count++;
        res >>= 1;
    }
    return count;
};