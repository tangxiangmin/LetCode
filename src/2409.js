/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
// 思路，将字符串转成从01-01开始的偏移量，计算数字
var countDaysTogether = function (
    arriveAlice,
    leaveAlice,
    arriveBob,
    leaveBob
) {
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var s1 = calc(arriveAlice);
    var e1 = calc(leaveAlice);
    var s2 = calc(arriveBob);
    var e2 = calc(leaveBob);

    // 求[s1,e1] 和 [s2,e2]的交集
    var ans = 0;
    for (var i = s1; i <= e1; ++i) {
        if (i >= s2 && i <= e2) ans++;
    }
    return ans;

    function calc(str) {
        var [m, d] = str.split("-");
        var day = 0;
        var month = Number(m)
        for (var i = 1; i <= month; ++i) {
            if (i === month) {
                day += Number(d);
            } else {
                day += monthDays[i - 1];
            }
        }

        return day;
    }
};

var arriveAlice = "08-15",
    leaveAlice = "08-18",
    arriveBob = "08-16",
    leaveBob = "08-19";
    arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
var ans = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
console.log(ans);
