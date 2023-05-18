/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
    var record = {};
    var cur = 1;
    var i = 1;
    while (true) {
        record[cur] = true;
        var next = (i * k) % n;
        i++;
        cur += next;
        if (cur > n) {
            cur = cur % n;
        }

        if (record[cur]) break;
    }
    var ans = [];
    for (var i = 1; i <= n; ++i) {
        if (!record[i]) {
            ans.push(i);
        }
    }
    return ans;
};

var n = 5,
    k = 2;
// (n = 4), (k = 4);
// n = 5;
// k = 3;
var ans = circularGameLosers(n, k);
console.log(ans); // [2,3]
