/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const [y, m, d] = date.split("-");

    const map = {
        1: 31,
        2: (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    };
    var sum = 0;
    for (let i = 1; i < parseInt(m); ++i) {
        sum += map[i];
    }
    sum += parseInt(d);
    return sum;
};

var date = "2019-01-09"
date = "2003-03-01"
date = "2019-02-10"
date = "2004-03-01"
var ans = dayOfYear(date)
console.log(ans)