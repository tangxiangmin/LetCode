/**
 * @param {number[]} light
 * @return {number}
 */
// 思路：如果所有亮着的灯都是连着的，则均为蓝色
var numTimesAllBlue = function(light) {
    var n = light.length;
    var arr = new Array(n).fill(false);

    let ans = 0;
    var right = -Infinity; // 保存已点亮的最大索引值，检测该索引值及左侧全部点亮，而右侧全部未点亮
    for (let i = 0; i < n; ++i) {
        let idx = light[i] - 1;
        arr[idx] = true;
        if (idx > right) {
            right = idx;
        }

        let flag = true;
        for (let j = 0; j <= right; ++j) {
            if (!arr[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            for (let j = right+1; j < n; ++j) {
                if (arr[j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) ans++;
        }
    }
    return ans;
};

var light = [2, 1, 3, 5, 4];
light = [3, 2, 4, 1, 5];
var res = numTimesAllBlue(light);
console.log(res);
