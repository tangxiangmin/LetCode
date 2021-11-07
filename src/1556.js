/**
 * @param {number} n
 * @return {string}
 */

var thousandSeparator = function (n) {
    var s = n.toString();
    var ans = "";
    var count = 0;
    for (let i = s.length - 1; i >= 0; --i) {
        count++;
        ans = s[i] + ans;
        if (count === 3 && i !== 0) {
            count = 0;
            ans = "." + ans;
        }
    }
    return ans
};
// 用正则，来点酷炫的
var thousandSeparator = function (n) {
    var re = /(?=(\B)(\d{3})+$)/;
    return n.toString().replace(re, function (...args){
        console.log(args)
        return '.'
    });
};
var n = 1234;
// n = 123
n = 123456789
var ans = thousandSeparator(n);
console.log(ans);
