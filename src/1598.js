/**
 * @param {string[]} logs
 * @return {number}
 */
// 思路，看起来就是用个栈
var minOperations = function (logs) {
    var stack = [];
    for (var log of logs) {
        if (log === "./") {
            continue;
        } else if (log === "../") {
            stack.pop();
        } else {
            stack.push(log);
        }
    }
    return stack.length;
};
var logs = ["d1/","d2/","../","d21/","./"]
logs = ["d1/","d2/","./","d3/","../","d31/"]
logs = ["d1/","../","../","../"]
var ans = minOperations(logs)
console.log(ans)