/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l = 0
    let r = numbers.length - 1
    while (l < r) {
        const sum = numbers[l] + numbers[r]
        if (sum === target) {
            return [l, r]
        } else if (sum > target) {
            r--
        } else {
            l++
        }
    }
    return []
};

var numbers = [1, 2, 4, 6, 10], target = 8
var ans = twoSum(numbers, target)
console.log(ans)