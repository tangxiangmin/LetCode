/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    var a = time[0];
    var b = time[1];
    var c = time[3];
    var d = time[4];

    var hour = calcHour();
    var minutes = clacMinutes();

    return hour * minutes;

    function calcHour() {
        if (a === "?") {
            if (b === "?") {
                return 24;
            }
            return b <= "3" ? 3 : 2;
        }
        if (b === "?") {
            return a === "2" ? 4 : 10;
        }
        return 1;
    }
    function clacMinutes() {
        var ans = 1;
        if (c === "?") {
            ans *= 6;
        }
        if (d === "?") {
            ans *= 10;
        }
        return ans;
    }
};

var time = "?5:00";
time = "0?:0?";
time = "??:??";
time = "2?:??";
time = "2?:44";
time = "?4:22";
var ans = countTime(time);
console.log(ans);
