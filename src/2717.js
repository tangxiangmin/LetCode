/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路，就是把1和n挪到对应的位置，因此需要找到他们的索引值
var semiOrderedPermutation = function (nums) {
    const n = nums.length
    const idx1 = nums.indexOf(1)
    const idxn = nums.indexOf(n)

    return n - 1 - idxn + idx1 - (idxn < idx1 ? 1 : 0)
};