/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    var str = num.toString();
    var even = [];
    var odd = [];
    for (var i = 0; i < str.length; ++i) {
        var ch = Number(str[i]);
        if (ch % 2) {
            odd.push(ch);
        } else {
            even.push(ch);
        }
    }
    even.sort((a, b) => b - a);
    odd.sort((a, b) => b - a);

    var ans = "";
    for (var i = 0; i < str.length; ++i) {
        var ch = Number(str[i]);
        if (ch % 2) {
            ans += odd.shift();
        } else {
            ans += even.shift();
        }
    }
    return ans;
};
var num = 1234;
num = 65875;
var ans = largestInteger(num);
console.log(ans);
