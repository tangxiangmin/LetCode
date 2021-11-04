/**
 * @param {number[][]} dominoes
 * @return {number}
 */
// 思路：对每个二维元素拍个序，然后求相等的
var numEquivDominoPairs = function (dominoes) {
    var map = {};
    var ans = 0;
    for (const domino of dominoes) {
        const key = createKey(domino);
        if (!map[key]) {
            map[key] = 1;
        } else {
            ans += map[key]++
        }
    }
    return ans;

    function createKey(card) {
        return card.sort((a, b) => a - b).join(",");
    }
};

var dominoes = [
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
];

dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]

var ans = numEquivDominoPairs(dominoes);
console.log(ans);
