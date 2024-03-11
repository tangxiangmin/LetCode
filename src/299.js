/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    var map = {}
    var a = 0
    var b = 0
    var used = {}
    for (var i = 0; i < secret.length; ++i) {
        var ch = secret[i]
        if (ch === guess[i]) {
            // 统计位置与值相同的元素
            a++
            used[i] = true
        } else {
            if (!map[ch]) {
                map[ch] = 0
            }
            map[ch]++
        }
    }

    for (var i = 0; i < guess.length; ++i) {
        if (!used[i]) {
            var ch = guess[i]
            if (map[ch]) {
                // 统计位置不同但出现的元素
                b++
                map[ch]--
            }
        }
    }

    return `${a}A${b}B`
};

var getHint = function (secret, guess) {
    const len = secret.length
    const map = new Array(10).fill(0)
    let a = 0
    let b = 0
    const used = {}
    for (let i = 0; i < len; ++i) {
        if (secret[i] === guess[i]) {
            a++
            used[i] = true
        } else {
            map[secret[i]]++
        }
    }
    for (let i = 0; i < len; ++i) {
        if (used[i]) continue
        const ch = guess[i]
        if (map[ch] > 0) {
            b++
            map[ch]--
        }
    }
    return `${a}A${b}B`
};

var secret = "1807", guess = "7810"
// secret = "1123", guess = "0111"
secret = "11", guess = '10'
var res = getHint(secret, guess)
console.log(res)