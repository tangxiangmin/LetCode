/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    var res = [];
    var num = 0;
    for (var i = 0; i < A.length; ++i) {
        num <<= 1
        num += A[i];
        num %= 10;
        res.push(num % 5 == 0);

    }
    return res;
};
