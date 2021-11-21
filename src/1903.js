/**
 * @param {string} num
 * @return {string}
 */
// 从后向前找到尾数是奇数的最长子字符串
var largestOddNumber = function (num) {
    var len = num.length;
    var token = "";
    for (var i = len - 1; i >= 0; --i) {
        var ch = num[i];
        if (token === "" && /[13579]/.test(ch)) {
            token = ch;
        } else if (token) {
            token = ch + token;
        }
    }
    return token
};
