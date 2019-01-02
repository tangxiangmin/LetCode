/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
    let cur = 0;

    for (let i = 1; ; i++) {
        cur += q;
        cur %= 2 * p;

        if (cur == 0) {
            return 0;
        }
        if (cur == p) {
            if (i % 2 == 1) {
                return 1;
            }
            return 2;
        }
    }
};