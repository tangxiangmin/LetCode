/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function (zero, one, limit) {
    const MOD = 10 ** 9 + 7;
    const dp = Array.from({ length: zero + one + 1 }, () =>
        Array.from({ length: zero + 1 }, () =>
            Array.from({ length: one + 1 }, () => 0)
        )
    );
    dp[0][0][0] = 1;

    for (let len = 1; len <= zero + one; len++) {
        for (let z = 0; z <= Math.min(len, zero); z++) {
            for (let o = 0; o <= Math.min(len, one); o++) {
                if (len > limit) {
                    if (z > 0 && o > 0) {
                        dp[len][z][o] = (dp[len - 1][z - 1][o] + dp[len - 1][z][o - 1]) % MOD;
                    }
                } else {
                    dp[len][z][o] = (
                        dp[len - 1][z][o] +
                        (z > 0 ? dp[len - 1][z - 1][o] : 0) +
                        (o > 0 ? dp[len - 1][z][o - 1] : 0)
                    ) % MOD;
                }
            }
        }
    }

    return dp[zero + one][zero][one];
};

var zero = 1, one = 1, limit = 2
zero = 3, one = 3, limit = 2
zero = 1, one = 2, limit = 1
var ans = numberOfStableArrays(zero, one, limit)
console.log(ans)