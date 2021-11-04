/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// 蔡勒公式，第一次听说
var dayOfTheWeek = function (d, m, y) {
    // 公式推导出的固定值
    var benchmark = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    var week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    y -= m < 3;
    return week[
        (y +
            Math.floor(y / 4) -
            Math.floor(y / 100) +
            Math.floor(y / 400) +
            benchmark[m - 1] +
            d) %
            7
    ];
};

var day = 31,
    month = 8,
    year = 2019;
var ans = dayOfTheWeek(day, month, year);
console.log(ans);
