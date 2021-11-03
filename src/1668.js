/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    const max = Math.floor(sequence.length / word.length);

    for (let i = max; i > 0; --i) {
        const sub = repeat(word, i);
        if (sequence.indexOf(sub) !== -1) {
            return i;
        }
    }

    return 0;

    function repeat(str, n) {
        let s = "";
        for (let j = 0; j < n; ++j) {
            s += str;
        }
        return s;
    }
};

var maxRepeating = function (sequence, word) {
    var tmp = word;
    var ans = 0;
    while (sequence.indexOf(tmp) !== -1) {
        tmp += word;
        ans++;
    }
    return ans;
};

var sequence = "ababc",
    word = "ab";
(sequence = "ababc"), (word = "ac");
(sequence = "ababc"), (word = "ba");
var ans = maxRepeating(sequence, word);
console.log(ans);
