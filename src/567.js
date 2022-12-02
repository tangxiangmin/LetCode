/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 思路：统计s2的某个子串与s1的数量是否一致

var checkInclusion = function (s1, s2) {
    var m = s1.length;
    var n = s2.length;
    if (m > n) return false;

    var m1 = new Array(26).fill(0);
    var m2 = new Array(26).fill(0);

    for (var i = 0; i < m; ++i) {
        m1[s1.charCodeAt(i) - 97]++;
        m2[s2.charCodeAt(i) - 97]++;
    }

    if (isSame(m1, m2)) {
        return true;
    }

    for (var i = m; i < n; ++i) {
        m2[s2.charCodeAt(i - m) - 97]--;
        m2[s2.charCodeAt(i) - 97]++;
        if (isSame(m1, m2)) {
            return true;
        }
    }
    return false;

    function isSame(m1, m2) {
        return m1.every((v, i) => {
            return v === m2[i];
        });
    }
};
