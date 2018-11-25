// 判断字符串中的字符是否包含`licensePlate`字符串中的全部字符

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let needCheckChars = {};
    for (let i = 0; i < licensePlate.length; ++i) {
        let ch = licensePlate[i];
        if (isChar(ch)) {
            ch = ch.toLowerCase();
            if (!needCheckChars[ch]) {
                needCheckChars[ch] = 0;
            }
            needCheckChars[ch]++;
        }
    }

    function isChar(ch) {
        return /^[a-zA-Z]$/.test(ch);
    }

    function isCompleteWord(word) {
        let tmp = {};
        for (let i = 0; i < word.length; ++i) {
            let ch = word[i];
            if (!tmp[ch]) {
                tmp[ch] = 0;
            }
            tmp[ch]++;
        }
        for (let key in needCheckChars) {
            if (!tmp[key]) {
                return false;
            }
            if (needCheckChars[key] > tmp[key]) {
                return false;
            }
        }
        return true;
    }

    let res = [];
    let minLenth = -1;
    for (let i = 0; i < words.length; ++i) {
        let word = words[i];
        if (isCompleteWord(word)) {
            if (minLenth == -1) {
                minLenth = word.length;
            }

            if (word.length < minLenth) {
                minLenth = word.length;
                res = [word];
            } else if (word.length == minLenth) {
                res.push(word);
            }
        }
    }
    console.log(res);
    return res[0];
};
