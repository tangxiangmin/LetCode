/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    const N = piles.length;
    const dp = Array(N + 2).fill(0).map(() => Array(N + 2).fill(0));

    for (let size = 1; size <= N; ++size)
        for (let i = 0, j = size - 1; j < N; ++i, ++j) {
            let parity = (j + i + N) % 2;  
            if (parity == 1)
                dp[i + 1][j + 1] = Math.max(piles[i] + dp[i + 2][j + 1], piles[j] + dp[i + 1][j]);
            else
                dp[i + 1][j + 1] = Math.min(-piles[i] + dp[i + 2][j + 1], -piles[j] + dp[i + 1][j]);
        }

    return dp[1][N] > 0;
};