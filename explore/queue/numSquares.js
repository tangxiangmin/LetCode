/**
 * @param {number} n
 * @return {number}
 * 示例图 ![](http://ww4.sinaimg.cn/large/006tNc79gy1g42tj5ajiij30gk053q32.jpg)
 */
var numSquares = function(n) {
    var queue = [n];
    var step = 0;

    while (queue.length) {
        var len = queue.length;
        step++;
        for (var i = 0; i < len; ++i) {
            var curr = queue.shift();
         
            for (var j = Math.floor(Math.sqrt(curr)); j >= 1; --j) {
                var next = curr - j * j;
                if (next == 0) {
                    return step;
                }
                queue.push(next);
            }
        }
    }
    return step;
};

var num = 7168;
num = 12
var res = numSquares(num);
console.log(res)