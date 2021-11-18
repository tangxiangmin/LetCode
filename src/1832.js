/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    var nums = [];
    var start = "a".charCodeAt(0);
    for (var ch of sentence) {
        var idx = ch.charCodeAt(0) - start;
        nums[idx] = true;
    }
    for (var i = 0; i < 26; ++i) {
        if (!nums[i]) return false;
    }
    return true;
};
