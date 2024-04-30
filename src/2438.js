/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
// 先构造一个powers
var productQueries = function (n, queries) {

    const powers = []
    // 数学逆元算法
    while (n) {
        lb = n & -n
        powers.push(lb)
        n ^= lb
    }

    const mod = 10 ** 9 + 7
    // 这里还可以用前缀积
    return queries.map(([l, r]) => {
        let ans = 1
        while (l <= r) {
            ans = ans * powers[l] % mod
            l++
        }
        return ans
    })
};

// 前缀积优化
var productQueries = function (n, queries) {
    const powers = []
    // 数学逆元算法
    while (n) {
        lb = n & -n
        powers.push(lb)
        n ^= lb
    }

    const mod = 10 ** 9 + 7
    const product = [powers[0]]
    for (let i = 1; i < powers.length; ++i) {
        product[i] = product[i - 1] * powers[i]
    }

    return queries.map(([l, r]) => {
        return product[r] / (l > 0 ? product[l - 1] : 1) % mod
    })
};
var n = 15, queries = [[0, 1], [2, 2], [0, 3]]
// n = 2, queries = [[0, 0]]
var ans = productQueries(n, queries)
console.log(ans)