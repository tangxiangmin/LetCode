/**
 * @param {number} n
 * @return {number}
 */
// 对于偶数下标处的数字，它可以为 0,2,4,6,8共5种，长度为n的数字，由于下标从0开始，则偶数下标 有(n+1)/2个
// 对于奇数下标处的数字，他可以为2、3、5、7共4种，奇数下标有n/2个

// 这个数字很大，下面这个写法还是会超时
var countGoodNumbers = function (n) {
    const MOD = 1000000007n
    const cache = new Map()
    function quickMul(x, n) {
        const key = `${x}_${n}`
        if (cache.has(key)) {
            return cache.get(key)
        }
        if (n === 0n) return 1n;
        if (x === 0n) return 0n;

        const y = quickMul(x, n / 2n);
        const ans = n % 2n === 0n ? y * y : x * y * y;
        cache.set(key, ans)
        return ans
    }
    // js内置的pow方法会超时
    // return Math.pow(5, Math.floor((n + 1) / 2)) * Math.pow(4, Math.floor(n / 2)) % 1000000007
    return Number(quickMul(5n, BigInt(Math.floor((n + 1) / 2))) * quickMul(4n, BigInt(Math.floor(n / 2))) % MOD)
};

var countGoodNumbers = function (n) {
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
    return Number(quickMul(5n, BigInt(Math.floor((n + 1) / 2))) * quickMul(4n, BigInt(Math.floor(n / 2))) % MOD)

}

var n = 1
n = 4
n = 50
n = 806166225460393
var ans = countGoodNumbers(n)
console.log(ans)