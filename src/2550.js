/**
 * @param {number} n
 * @return {number}
 */
// 逆向思维，在不考虑碰撞的情况下，一共有2^n种移动方式，其中，都向同一个边移动时不会相撞，每个顶点有两个边，因此最后的答案是2^n -2
// 由于n很大，最后又变成了快速幂的运算
var monkeyMove = function (n) {

    const MOD = 1000000007n
    function quickMul(x, y) {
        var ret = 1n, mul = x;
        while (y > 0n) {
            if (y % 2n == 1n) {
                ret = ret * mul % MOD;
            }
            mul = mul * mul % MOD;
            y = y / 2n;
        }
        return ret;
    };
    // console.log((quickMul(2n, BigInt(n)) - 2n))
    return Number((quickMul(2n, BigInt(n)) - 2n + MOD) % MOD)
};

var n = 500000005
// var n = 4
console.log(monkeyMove(n))