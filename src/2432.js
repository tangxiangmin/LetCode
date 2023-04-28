/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    var ans = -1
    var max = -1
    var prev = 0
    for(var i = 0; i < logs.length; ++i){
        var [id, time ] = logs[i]
        var duration = time -prev
        if(duration > max){
            max =duration
            ans = id
        }else if(duration === max){
            ans = Math.min(id, ans)
        }
        prev = time
    }
    return ans
};

var n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
n = 26, logs = [[1,1],[3,7],[2,12],[7,17]]
n = 70, logs = [[36,3],[1,5],[12,8],[25,9],[53,11],[29,12],[52,14]]
var ans = hardestWorker(n, logs)
console.log(ans)