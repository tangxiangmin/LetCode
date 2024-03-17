/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {

    let sum = 0
    for (const num of nums) {
        sum += encrypt(num)
    }
    return sum

    function encrypt(num) {
        const arr = num.toString().split('')
        const max = Math.max(...arr)
        return +(new Array(arr.length).fill(max).join(''))
    }
};

var nums = [1, 2, 3]
nums = [10,21,31]
var ans = sumOfEncryptedInt(nums)
console.log(ans)