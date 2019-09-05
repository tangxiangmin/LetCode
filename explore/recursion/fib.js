/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    var map = new Map();

    return h(N);

    function h(N) {
        if (map.has(N)) {
            return map.get(N);
        }
        if (N <= 1) {
            return N;
        }
        let res = fib(N - 1) + fib(N - 2);
        map.set(N, res);
        return res;
    }
};
