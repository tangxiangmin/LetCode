/**
 * https://leetcode-cn.com/explore/learn/card/queue-stack/217/queue-and-bfs/873/
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    var step = 0;
    var queue = [];
    var visited = {};
    
    var start = '0000'
    if(deadends.includes(start)){
        return -1
    }
    queue.push(start);
    visited[start] = true;

    while (queue.length) {
        var len = queue.length;
        // 前len个元素都是step这一步可达到的操作，因此要遍历一次
        for (var i = 0; i < len; ++i) {
            var cur = queue.shift();
            if (cur === target) {
                return step;
            }

            var siblings = getSiblings(cur);

            siblings.forEach(function(item) {
                if (!visited[item] && !deadends.includes(item)) {
                    queue.push(item);
                    visited[item] = true;
                }
            });
        }
        step++;
    }
    return -1;

    function getSiblings(cur) {
        var ans = [];
        for (var i = 0; i < cur.length; ++i) {
            var c = parseInt(cur[i]);
            var arr = cur.split("");

            arr[i] = c + 1;
            if (arr[i] > 9) {
                arr[i] = 0;
            }
            ans.push(arr.join(""));

            arr[i] = c - 1;
            if (arr[i] < 0) {
                arr[i] = 9;
            }
            ans.push(arr.join(""));
        }

        return ans;
    }
};

var deadends = ["0201", "0101", "0102", "1212", "2002"];
var target = "0202";

var res = openLock(deadends, target);
console.log(res);
