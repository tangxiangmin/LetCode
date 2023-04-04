/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    if (s.length <= k) return s;
    var tmp = "";
    var sum = 0;
    var ans = "";
    for (var i = 0; i < s.length; ++i) {
        tmp += s[i];
        sum += Number(s[i]);

        if (tmp.length == k) {
            ans += sum;
            tmp = "";
            sum = 0;
        }
    }
    if (tmp.length) {
        ans += sum;
    }

    return ans.length > k ? digitSum(ans, k) : ans;
};

var s = "11111222223",
    k = 3;

(s = "00000000"), (k = 3);
s = "233";
k = 3;
var ans = digitSum(s, k);
console.log(ans);
