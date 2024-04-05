/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    const n = chalk.length
    const sum = chalk.reduce((acc, num) => acc + num, 0)
    k = k % sum
    let i = 0
    while (chalk[i] <= k) {
        k -= chalk[i]
        i = (i + 1) % n
    }
    return i
};
var chalk = [3, 4, 1, 2], k = 25
chalk = [22, 25, 39, 3, 45, 45, 12, 17, 32, 9], k = 835
var ans = chalkReplacer(chalk, k)
console.log(ans)