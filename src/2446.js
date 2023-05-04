/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
    var s1 = calc(event1[0]);
    var e1 = calc(event1[1]);

    var s2 = calc(event2[0]);
    var e2 = calc(event2[1]);

    if (s1 < s2) {
        return e1 >= s2;
    }
    if (s1 === s2) {
        return true
    }
    return e2 >= s1;

    function calc(time) {
        const [h, m] = time.split(":");
        return Number(h) * 60 + Number(m);
    }
};

var event1 = ["01:15", "02:00"],
    event2 = ["02:00", "03:00"];
    event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
    event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
    event1 = ["07:22","18:22"], event2 = ["07:22","14:16"]
var ans = haveConflict(event1, event2);
console.log(ans);
