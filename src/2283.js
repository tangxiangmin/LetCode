/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    var buket = new Array(10).fill(0);
    for (var i = 0; i < num.length; ++i) {
        var ch = num[i];
        buket[ch]++;
    }
    for (var i = 0; i < num.length; ++i) {
        var ch = num[i];
        if (Number(ch) !== buket[i]) {
            console.log(i, ch)
            return false;
        }
    }
    return true;
};

var num = "1210";
var ans = digitCount(num);
console.log(ans);
