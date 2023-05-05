/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    var nums = num.toString().split("")
    var ans = 0;
    for (var ch of nums) {
        if (num % ch === 0) {
            ans++;
        }
    }
    return ans;
};
var num = 7;
num = 121;
// num = 54
var ans = countDigits(num);
console.log(ans);
