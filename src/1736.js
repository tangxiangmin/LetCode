/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    const [hour, minute] = time.split(":");

    var [h1, h2] = hour;

    h1 = h1 === "?" ? (h2 === "?" || h2 <= "3" ? "2" : "1") : h1;
    h2 = h2 === "?" ? (h1 === "2" ? "3" : "9") : h2;

    var [m1, m2] = minute;
    m1 = m1 === "?" ? "5" : m1;
    m2 = m2 === "?" ? "9" : m2;
    return h1 + h2 + ":" + m1 + m2;
};

var time = "2?:?0";

time = "0?:3?";
time = "?4:03";
time = "??:??";
var ans = maximumTime(time);

console.log(ans);
