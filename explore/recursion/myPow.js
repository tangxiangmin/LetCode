/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
   var  N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    var  ans = 1;
    for ( var i = 0; i < N; i++)
        ans = ans * x;
    return ans;
};

