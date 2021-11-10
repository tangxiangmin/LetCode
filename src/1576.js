/**
 * @param {string} s
 * @return {string}
 */
// 只要跟左右不一样就行了，因此用三个字符来替代下
var modifyString = function (s) {
    var arr = s.split('');
    var len = arr.length;
    for (var i = 0; i < len; ++i) {
        var ch = arr[i];
        if (ch === "?") {
            var prev = i === 0 ? "" : arr[i - 1];
            var next = i === len - 1 ? "" : arr[i + 1];
            arr[i] = replace(prev, next);
        }
    }
    return arr.join('')

    function replace(a, b) {
        return ["a", "b", "c"].find((i) => i !== a && i !== b);
    }
};
