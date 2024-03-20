/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
    let ans = 0
    for (let i = 0; i < nums.length - 1; ++i) {
        let a = +nums[i].toString()[0]
        for (let j = i + 1; j < nums.length; ++j) {
            let b = nums[j].toString()
            b = +b[b.length - 1]
            if (isCoprime(a, b)) {
                ans++
            }

        }
    }
    return ans
    function isCoprime(a, b) {
        let x = a
        let y = b
        let tmp = 1

        while (true) {
            tmp = x % y
            if (tmp === 0) {
                break
            }
            x = y
            y = tmp
        }

        return y === 1
    }
};

var nums = [2, 5, 1, 4]
var ans = countBeautifulPairs(nums)
console.log(ans)