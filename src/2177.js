/**
 * @param {number} num
 * @return {number[]}
 */
// 这道题可以用数学
// n-1 + n + n+1=num
var sumOfThree = function (num) {
    if (num % 3n !== 0n) return []
    const n = num / 3n
    return [n - 1n, n, n + 1n]
};