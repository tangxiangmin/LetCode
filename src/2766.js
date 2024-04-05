/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
    const n = moveFrom.length
    const blanks = new Set(nums)

    for (let i = 0; i < n; ++i) {
        blanks.delete(moveFrom[i])
        blanks.add(moveTo[i])
    }

    const arr = Array.from(blanks)
    arr.sort((a, b) => a - b)
    return arr
};

var nums = [1, 6, 7, 8], moveFrom = [1, 7, 2], moveTo = [2, 9, 5]
var ans = relocateMarbles(nums, moveFrom, moveTo)
console.log(ans)