/**
 * @param {number} n
 * @return {number}
 */
function concatenatedBinary(n) {
    const mod = 1000000007;
    var res = 0;
    var len = 0;
    for (var i = 0; i <= n; i++) {
        if (i && !(i & i - 1)) len++;
        res = ((res << len) + i) % mod;
    }
    return res % mod;

}
