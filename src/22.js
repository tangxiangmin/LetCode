/**
 * @param {number} n
 * @return {string[]}
 */

// 思路：回溯法
var generateParenthesis = function (n) {
    var ans = []
    backtrack(ans, "", 0, 0, n);
    return ans
    function backtrack(ans, cur, open, close, max) {
        if (cur.length == max * 2) {
            ans.push(cur);
            return;
        }

        if (open < max) {
            backtrack(ans, cur + "(", open + 1, close, max);
        }
        if (close < open) {
            backtrack(ans, cur + ")", open, close + 1, max);
        }
    }
};

var n = 3
// 1 => () =>[(0,1)]
// 2 => ()(), (()) => 
// 3 => (())(), ()(()),()()(), ((())), ()(())

var res = generateParenthesis(n)
console.log(res)

