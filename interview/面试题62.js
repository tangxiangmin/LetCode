/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 思路1：模拟删除操作，部分测试用例会超时
var lastRemaining = function(n, m) {
    var arr = []
    for(var i = 0; i < n; ++i){
        arr.push(i)
    }
    let idx = 0
    while (n > 1) {
        idx = (idx + m - 1) % n;
        arr.splice(idx, 1);
        n--;
    }
    return arr[0]
};

var n = 5, m = 3
// n = 70866
// m =116922
// n = 10, m = 17 // 2
var res = lastRemaining(n, m)
console.log(res)