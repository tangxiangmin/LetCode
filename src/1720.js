/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    var ans = [first];
    for (var i = 0; i < encoded.length; ++i) {
        ans[i + 1] = ans[i] ^ encoded[i];
    }
    return ans;
};

var encoded = [1, 2, 3],
    first = 1;
var ans = decode(encoded, first);
console.log(ans);
