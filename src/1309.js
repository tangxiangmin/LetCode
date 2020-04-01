/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let map = {};
    let startCode = "a".charCodeAt(0);
    for (let i = 1; i <= 26; ++i) {
        let key = i <= 9 ? i : `${i}#`;
        let ch = String.fromCharCode(i + startCode - 1);
        map[key] = ch;
    }
    let ans = "";
    let i = 0;
    let j = i + 2;
    for (; i < s.length; ++i) {
        if (s[j] == "#") {
            let key = s.substr(i, 3);
            ans += map[key];
            if (j === s.length - 1) break;
            // 将i和j跳过
            i = j;
            j = i + 3;
        } else {
            let key = s[i];
            ans += map[key];
            j++;
        }
    }
    return ans;
};

var s = "10#11#12";
s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
var res = freqAlphabets(s);
console.log(res);
