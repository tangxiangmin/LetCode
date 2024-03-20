// 贪心、位运算这些都不太会呢
var minNonZeroProduct = function(p) {
    if (p === 1) {
        return 1;
    }
    const mod = BigInt(1e9 + 7);
    const x = fastpow(2n, BigInt(p), mod) - 1n;
    const y = 1n << BigInt(p - 1);
    return fastpow(x - 1n, y - 1n, mod) * x % mod;
};

function fastpow(x, n, mod) {
    let res = BigInt(1);
    while (n > 0) {
        if (n & 1n) {
            res = (res * x) % mod;
        }
        x = (x * x) % mod;
        n >>= 1n;
    }
    return res;
}
