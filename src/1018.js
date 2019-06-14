/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    var res = [];
    var s = 0;
    for (var i = 0; i < A.length; ++i) {
        s = s * 2 + A[i];
        res.push(num % 5 === 0);
    }
    return res;
};
