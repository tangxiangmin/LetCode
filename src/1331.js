/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const tmp = arr.slice().sort((a, b) => a - b);
    const map = {};
    let order = 1;
    for (const num of tmp) {
        if (!map[num]) {
            map[num] = order++;
        }
    }

    return arr.map((num) => {
        return map[num];
    });
};

var arr = [40, 10, 20, 30];
arr = [100,100,100]
arr = [37,12,28,9,100,56,80,5,12]
var ans = arrayRankTransform(arr);
console.log(ans);
