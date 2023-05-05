/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    var chars = num.toString().split("");
    var max = find("9");
    var min = find("0");

    return max - min;

    function find(c) {
        var arr = [];
        var max;
        for (var i = 0; i < chars.length; ++i) {
            var ch = chars[i];
            if (ch !== c) {
                if (!max) {
                    max = ch;
                    arr[i] = c;
                } else if (ch === max) {
                    arr[i] = c;
                } else {
                    arr[i] = ch;
                }
            } else {
                arr[i] = ch;
            }
        }
        return Number(arr.join(""));
    }
};
var num = 11891;
num = 90;
var ans = minMaxDifference(num);
console.log(ans);
