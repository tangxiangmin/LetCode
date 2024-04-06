/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    return gcd(min, max)

    function gcd(num1, num2) {
        while (num2 != 0) {
            var temp = num1;
            num1 = num2;
            num2 = temp % num2;
        }
        return num1;
    }
};