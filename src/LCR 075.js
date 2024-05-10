/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const map = arr2.reduce((acc, num, index) => {
        acc[num] = index
        return acc
    }, {})

    const first = []
    const last = []
    for (const num of arr1) {
        if (map[num] === undefined) {
            last.push(num)
        } else {
            first.push(num)
        }
    }
    first.sort((a, b) => {
        return map[a] - map[b]
    })
    last.sort((a, b) => a - b)

    return [...first, ...last]
};
var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
var ans = relativeSortArray(arr1, arr2)
console.log(ans)