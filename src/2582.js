/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    var i = 1;
    var pos = true;
    while (time) {
        if (pos) {
            i++;
        } else {
            i--;
        }
        if (i >= n) {
            pos = false;
        } else if (i <= 1) {
            pos = true;
        }
        time--;
    }
    return i;
};

var n = 4,
    time = 5;
(n = 3), (time = 2);
(n = 18), (time = 38);
var ans = passThePillow(n, time);
console.log(ans);
