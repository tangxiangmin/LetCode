/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const target = nums.join('')
    let s = ''
    let prev = -1
    for (const ch of target) {
        if (prev !== ch) {
            s += ch
            prev = ch
        }
    }
    const idx = s.indexOf('0')

    if (idx === -1) return 0

    return s.length - idx
};
var nums = [0, 1, 1, 0, 1]
nums = [1, 0, 0, 0]
var ans = minOperations(nums)
console.log(ans)