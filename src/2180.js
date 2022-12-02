/**
 * @param {number} num
 * @return {number}
 */

var countEven = function (num) {
    var ans = 0;
    for (var i = 1; i <= num; ++i) {
        if (countSum(i) % 2 === 0) {
            ans++;
        }
    }
    return ans;

    function countSum(val) {
        return val
            .toString()
            .split("")
            .reduce((acc, ch) => {
                return acc + Number(ch);
            }, 0);
    }
};

var num = 4;
// num = 30;

var ans = countEven(num);
console.log(ans);
