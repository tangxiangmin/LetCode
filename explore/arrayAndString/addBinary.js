/**
 * https://leetcode-cn.com/explore/featured/card/array-and-string/200/introduction-to-string/779/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 保证a较长
    if (a.length < b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }

    function str2NumArr(str) {
        var arr = [];
        for (var i = 0; i < str.length; ++i) {
            arr[i] = parseInt(str[i], 10);
        }
        return arr;
    }

    a = str2NumArr(a);
    b = str2NumArr(b);

    var len = a.length;
    var diff = len - b.length;


    var prefix = ''
    for (var i = len - 1; i >= diff; --i) {
        var c1 = a[i];
        var c2 = b[i - diff];
        var sum = c1 + c2;
        if (sum === 2) {
            a[i] = 0;
            var k = i - 1;
            while (a[k] === 1) {
                a[k] = 0;
                k--;
            }

            if (k >= 0) {
                a[k] = 1;
            } else {
                prefix += '1'
            }
        } else {
            a[i] = sum;
        }
    }
    return prefix + a.join("");
};

var a = "11", b = "1";
a = "1010", b = "1011";
// a = "111", b = "111";
var res = addBinary(a, b);
console.log(res);
