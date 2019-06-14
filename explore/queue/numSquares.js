/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // var list = getSquarList(n)
    var queue = []
    var visited = {}

    queue.push(n);
    var step = 0

    while(queue.length){
        var len = queue.length
        step++
        console.log(queue)
        for(var i = 0; i < len; ++i){
            var curr = queue.shift()
            if(visited[curr]){
                visited[curr] = true;
                continue
            }
            for (var j = 1; j <= Math.sqrt(curr); j++) {
                var next = curr - j * j;
                if (next == 0) {
                    return step;
                }
                queue.push(next);
            }
        }
    }
    return 0

    // 获取小于n的平方数
    function getSquarList(n){
        var ans = []
        for(var i = 1; i*i <= n; ++i){
            ans.push(i * i);
        }
        return ans.reverse()
    }
};

var res = numSquares(13);
console.log(res)