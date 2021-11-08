/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    var x = 0;
    for (var op of operations) {
        if (op === "++X" || op === "X++") {
            x++;
        } else if (op === "--X" || op === "X--") {
            x--;
        }
    }
    return x;
};

var operations = ["--X", "X++", "X++"];
operations = ["++X","++X","X++"]

var ans = finalValueAfterOperations(operations);
console.log(ans);
