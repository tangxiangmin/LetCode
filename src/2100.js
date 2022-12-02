/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */

// 思路1 bf
var goodDaysToRobBank = function (security, time) {
    let ans = [];
    for (var i = time; i < security.length - time; ++i) {
        (() => {
            for (var j = i - time; j <= i + time; ++j) {
                if (j < i) {
                    if (security[j + 1] > security[j]) {
                        return;
                    }
                }
                if (j > i) {
                    if (security[j - 1] > security[j]) {
                        return;
                    }
                }
            }
            ans.push(i);
        })();
    }
    return ans;
};

var security = [5, 3, 3, 3, 5, 6, 2],
    time = 2;

var security = [1, 1, 1, 1, 1],
    time = 0;
var security = [1, 2, 3, 4, 5, 6],
    time = 2;

var security = [1],
    time = 5;
var ans = goodDaysToRobBank(security, time);
console.log(ans);
