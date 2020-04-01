/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    var sum = A.reduce((acc, item) => acc + item, 0);
    var part = sum / 3;
    if (part !== parseInt(part)) {
        return false;
    }

    var sub = 0;
    var count = 0;
    for (var i = 0; i < A.length; ++i) {
        sub += A[i];
        if (sub === part && count < 3) {
            count++;
            sub = 0;
        }
    }
    return sub === 0 && count === 3;
};
var A = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
A = [10, -10, 10, -10, 10, -10, 10, -10];
var res = canThreePartsEqualSum(A);
console.log(res);
