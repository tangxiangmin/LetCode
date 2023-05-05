/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    var x = 0;
    var y = 0;
    for (var num of nums) {
        x += num;
        y += calcBit(num);
    }
    return Math.abs(x - y);

    function calcBit(num) {
        var chars = num.toString().split("");
        var ans = 0;
        for (var ch of chars) {
            ans += Number(ch);
        }
        return ans;
    }
};

var nums = [1,15,6,3]
var ans = differenceOfSum(nums)
console.log(ans)