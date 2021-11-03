/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
    const map = new Map();
    for (const p of pieces) {
        map.set(p[0], p);
    }
    for (let i = 0; i < arr.length;) {
        const num = arr[i];
        if (!map.has(num)) {
            return false;
        }
        const list = map.get(num);
        for (let j = 0; j < list.length; ++j, ++i) {
            if (arr[i] !== list[j]) {
                return false;
            }
        }
    }
    return true;
};

let arr = [12];
let pieces = [[1]];

// arr = [15,88,11]
// pieces = [[88],[15],[11]]

arr = [32, 66, 73, 15, 3, 70, 53];
pieces = [[66, 73], [15], [3], [32], [70], [53]];
const ans = canFormArray(arr, pieces);
console.log(ans);
