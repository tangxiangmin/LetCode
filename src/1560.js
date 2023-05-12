/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
    var map = {
        [rounds[0]]: 1,
    };

    for (var i = 0; i < rounds.length - 1; ++i) {
        var cur = rounds[i];
        var next = rounds[i + 1];
        clac(cur, next);
    }
    var max = Math.max(...Object.values(map));

    var ans = [];
    Object.keys(map).forEach((key) => {
        if (map[key] === max) {
            ans.push(Number(key));
        }
    });
    return ans;

    function clac(start, end) {
        if (end < start) {
            clac(start, n);
            clac(0, end);
        } else {
            // 不包含开始
            for (var i = start + 1; i <= end; ++i) {
                if (!map[i]) map[i] = 0;
                map[i]++;
            }
        }
    }
};

var n = 4,
    rounds = [1, 3, 1, 2];
    n = 2, rounds = [2,1,2,1,2,1,2,1,2]
    n = 7, rounds = [1,3,5,7]
var ans = mostVisited(n, rounds);
console.log(ans);
