/**
 * @param {number} N
 * @return {boolean}
 * 
 */
var divisorGame = function (N) {
    var memo = {}
    memo[1] = false

    for (var n = 1; n <= N; ++n) {
        for (var x = 1; x < n; ++x) {
            if (n % x === 0) {
                if (!memo[n - x]) {
                    memo[n] = true
                    break
                }
            }
            memo[n] = false
        }
    }
    return memo[N]
};

var n = 7
var res = divisorGame(n)
console.log(n)

// 2 可以取1，对方为1，false
// 3 可以取1，对方为2，false
// 4 可以取1、2，最后取1,然后对方为3,true
// 5 可以取1,然后对方为4,false
// 6 可以取1、2、3，取3,然后对方为3,true
// 7，可以取1，对方为6，false
// 依次类推，可以保存子问题的答案，然后依次求得较大问题的值