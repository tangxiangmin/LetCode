/**
 * @param {number[]} amount
 * @return {number}
 */
// 读懂题意，同一种类型的1秒最多装1杯
// 因此每秒最好是接两种类型不同的水，每次都是去减少max 和mid
var fillCups = function (amount) {
    var [min, mid, max] = sort(amount);
    if (max >= mid + min) return max;
    var ans = 0;

    // 每次都是去减少max 和mid
    while (max || mid || min) {
        max--;
        if (mid > 0) mid--;
        ans++;

        var list = sort([min, mid, max]);
        min = list[0];
        mid = list[1];
        max = list[2];
    }
    return ans;

    function sort(list) {
        return list.sort((a, b) => a - b);
    }
};
// 第 1 秒：装满一杯冷水和一杯温水。
// 第 2 秒：装满一杯温水和一杯热水。
// 第 3 秒：装满一杯温水和一杯热水。
// 第 4 秒：装满一杯温水。
var amount = [1, 4, 2];
var amount = [5, 4, 4];
// 第 1 秒：装满一杯冷水和一杯热水。443
// 第 2 秒：装满一杯冷水和一杯温水。333
// 第 3 秒：装满一杯冷水和一杯温水。223
// 第 4 秒：装满一杯温水和一杯热水。212
// 第 5 秒：装满一杯冷水和一杯热水。111
// 第 6 秒：装满一杯冷水和一杯温水。001
// 第 7 秒：装满一杯热水。000

var ans = fillCups(amount);
console.log(ans);
