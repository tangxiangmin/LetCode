/**
 * https://leetcode-cn.com/explore/learn/card/queue-stack/220/conclusion/890/
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var st = [];
    function isNum(c) {
        return /\d+/.test(c);
    }
    function isChar(c) {
        return /[a-z]+/.test(c);
    }
    function repeatStr(s, num) {
        var str = "";
        for (var i = 0; i < num; ++i) {
            str += s;
        }
        return str;
    }

    var last;
    for (var i = 0; i < s.length; ++i) {
        var c = s[i];
        if (c === "]") {
            var str = st.pop();
            var num = st.pop();
            while (num && !isNum(num)) {
                str = num + str;
                num = st.pop();
            }
            var res = repeatStr(str, num || 1);
            st.push(res);
        } else if (c !== "[") {
            var last = st[st.length - 1];
            var lastChar = s[i - 1];
            if (last && lastChar !== "[") { // 处理2[2[a]] 的情况
                if (isNum(c) && isNum(last)) {
                    st[st.length - 1] = last + c; // 保存连续数字
                } else if (isChar(c) && isChar(last)) {
                    st[st.length - 1] = last + c; // 保存连续字符
                } else {
                    st.push(c);
                }
            } else {
                st.push(c);
            }
        }
    }
    return st.join("");
};
var s = "3[a]2[bc]";
// s = "3[a2[c]]";
// s = "2[abc]3[cd]ef";
// s = "leetcode";
s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef";
// s = "100[leetcode]";
console.log(decodeString(s));
