/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    var [day, month, year] = date.split(" ");
    return `${year}-${pad(parseMonth(month))}-${pad(parseDay(day))}`;

    function parseDay(d) {
        var s = "";
        for (var ch of d) {
            if (/\d/.test(ch)) {
                s += ch;
            } else {
                break;
            }
        }
        return s;
    }
    function parseMonth(m) {
        return {
            Jan: 1,
            Feb: 2,
            Mar: 3,
            Apr: 4,
            May: 5,
            Jun: 6,
            Jul: 7,
            Aug: 8,
            Sep: 9,
            Oct: 10,
            Nov: 11,
            Dec: 12,
        }[m];
    }
    function pad(n) {
        return n < 10 ? "0" + n : n;
    }
};
