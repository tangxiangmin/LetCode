/**
 * @param {number[]} supplies
 * @return {number[]}
 */
// 模拟一下看看
var supplyWagon = function (supplies) {
    let half = supplies.length >> 1;
    while (supplies.length > half) {
        let minSum = Infinity,
            minIndex = Infinity;
        for (let i = 0; i < supplies.length - 1; i++) {
            let sum = supplies[i] + supplies[i + 1];
            if (sum < minSum) {
                minSum = sum;
                minIndex = i;
            }
        }
        supplies.splice(minIndex, 2, minSum);
    }
    return supplies;
};