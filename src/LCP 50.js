/**
 * @param {number[]} gem
 * @param {number[][]} operations
 * @return {number}
 */
var giveGem = function (gem, operations) {

    for (const op of operations) {
        const [x, y] = op
        const val = Math.floor(gem[x] / 2)
        gem[x] -= val
        gem[y] += val
    }
    const min = Math.min(...gem)
    const max = Math.max(...gem)
    return max - min
};