/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var ans = [];
    for (var i = n; i >= 1; --i) {
        if (k == 1) {
            ans.push([i]);
        } else {
            var list = combine(i - 1, k - 1);
            list.forEach((row) => {
                row.push(i);
            });
            ans = ans.concat(list);
        }
    }
    return ans;
};

var n = 4,
    k = 2;
var ans = combine(n, k);
console.log(ans);
