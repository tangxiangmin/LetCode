/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
    const arr = new Array(51).fill(0)
    let ans = 0
    for (const num of nums) {
        arr[num]++
        if (arr[num] == 2) {
            ans = ans ^ num
        }
    }
    return ans

};