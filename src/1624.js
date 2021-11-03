/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    const map = {};

    const find = (s) => {
        if (map[s]) return map[s];
        const len = s.length;

        if (len < 2) return -1;

        if (s[0] === s[len - 1]) return len - 2;

        const l = find(s.substr(0, len - 1));
        const r = find(s.substr(1, len));

        const ans = Math.max(l, r);
        map[s] = ans;
        return ans;
    };

    return find(s);
};

// console.log(maxLengthBetweenEqualCharacters('cabbac'))
const str = "pfwftcwdbiodyoojbebtwoyqemmsgmsryugkkcwykhtaczj";
const ans = maxLengthBetweenEqualCharacters(str);
console.log(ans);
