/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    function calc(n) {
        var arr = n.toString().split("");
        return arr.reduce((acc, item) => {
            return acc + Math.pow(item, 2);
        }, 0);
    }

    n = calc(n);
    var hash = new Set();
    hash.add(n);

    while (n !== 1) {
        n = calc(n);
        if (hash.has(n)) {
            return false; // 循环了
        }
        hash.add(n);
    }

    return true;
};
