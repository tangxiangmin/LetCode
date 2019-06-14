/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    function isOperator(c) {
        return. ["*", "/", "+", "-"].includes(c);
    }
    var st = [];
    for (var i = 0; i < tokens.length; ++i) {
        var c = tokens[i];
        if (isOperator(c)) {
            var r = st.pop();
            var l = st.pop();
            var res;
            if (c === "+") {
                res = parseInt(l) + parseInt(r);
            } else if (c === "-") {
                res = parseInt(l) - parseInt(r);
            } else if (c === "*") {
                res = parseInt(l) * parseInt(r);
            } else if (c === "/") {
                res = parseInt(parseInt(l) / parseInt(r));
            }
            st.push(res);
        } else {
            st.push(c);
        }
    }
    return st.join("");
};

var tokens = ["2", "1", "+", "3", "*"];
// tokens = ["4", "13", "5", "/", "+"];
tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

var res = evalRPN(tokens);
console.log(res);
