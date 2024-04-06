/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    nums.sort((a, b) => a - b)
    const [a, b, c] = nums

    if (a + b <= c || a + c <= b || c + b <= a) return 'none'

    if (a === b && b === c) return 'equilateral'

    if (a == b || b === c) return 'isosceles'
    return 'scalene'
};