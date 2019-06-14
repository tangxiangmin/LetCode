/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    var data = [];
    for (var i = 0; i < N; ++i) {
        data[i] = {
            first: 0,
            second: 0
        };
    }
    for (var i = 0; i < trust.length; ++i) {
        let [index, target] = trust[i];
        data[index - 1].first++; //出度加1
        data[target - 1].second++; //入度加1
    }

    for (var j = 0; j < N; j++) {
        //如果出度为0，入度为 N-1 则是法官
        if (data[j].first == 0 && data[j].second == N - 1) {
            return j + 1;
        }
    }
    return -1;
};

var res = findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]);
console.log(res);
