/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let stack = [];
    stack.push(0);

    for (let i = 0; i < S.length; ++i) {
        if (S[i] === "(") {
            stack.push(0);
        } else {
            let v = stack.pop();
            let w = stack.pop();
            stack.push(w + Math.max(2 * v, 1));
        }
    }
    return stack.pop()
};

scoreOfParentheses("(()(()))");
[0, [1, 2], [3, 6], 7];
"()()"[([0, 1], [2, 3])];
