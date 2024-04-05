/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const l = []
    const r = []
    const m = []
    for (const num of nums) {
        if (num < pivot) {
            l.push(num)
        } else if (num === pivot) {
            m.push(num)
        } else {
            r.push(num)
        }
    }
    return [...l, ...m, ...r]
};