/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
    const lcm = lcmMultiple(coins)
    const min = Math.min(...coins)

    const set = new Set()
    const cnt = lcm / min

    for (const coin of coins) {
        for (let i = 1; i <= cnt; ++i) {
            const val = i * coin
            if (val > lcm) break
            set.add(val)
        }
    }
    const len = set.size

    // 最小公倍数很大的时候，空间复杂度会超时
    const arr = Array.from(set)
    arr.sort((a, b) => a - b)

    let ans = Math.floor(k / len) * lcm
    const extra = k % len
    if (extra > 0) {
        ans += arr[extra - 1]
    }

    return ans


    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
    function lcmMultiple(numbers) {
        let result = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            let currentGCD = gcd(result, numbers[i]);
            result = (result * numbers[i]) / currentGCD;
        }

        return result;
    }

};


var coins = [3, 6, 9], k = 3
// coins = [5, 2], k = 7
// coins = [6, 3], k = 8 // 24
coins = [3, 8, 7], k = 85
// coins = [5], k = 7
coins = [2, 25, 17, 19, 3, 13, 15, 14, 1, 4], k = 20368
console.log(findKthSmallest(coins, k))