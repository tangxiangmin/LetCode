/**
 * @param {number} n
 * @return {string[]}
 */

// 思路：回溯法
var generateParenthesis = function (n) {
    var ans = []
    backtrack("", 0, 0);
    return ans
    function backtrack(cur, open, close) {
        if (cur.length == n * 2) {
            ans.push(cur);
            return;
        }

        if (open < n) {
            backtrack(cur + "(", open + 1, close);
        }
        if (close < open) {
            backtrack(cur + ")", open, close + 1);
        }
    }
};

var n = 3
// 1 => () =>[(0,1)]
// 2 => ()(), (()) => 
// 3 => (())(), ()(()),()()(), ((())), ()(())

var res = generateParenthesis(n)
console.log(res)

