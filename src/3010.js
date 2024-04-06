/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    const [a, ...rest] = nums
    rest.sort((a, b) => a - b)
    return a + rest[0] + rest[1]
};