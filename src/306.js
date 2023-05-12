/**
 * @param {string} num
 * @return {boolean}
 */
// 思路：累加数列只要前两个数确定了，后面的就都确定了，先枚举看看
var isAdditiveNumber = function (num) {
    for (var i = 0; i < num.length - 1; ++i) {
        for (var j = i + 1; j < num.length; ++j) {
            var a = num.substring(0, j);
            if (a[0] === "0" && a.length > 1) continue;
            for (var k = j + 1; k <= num.length; ++k) {
                var b = num.substring(j, k);
                if (b[0] === "0" && b.length > 1) continue;
                // 检查后面的数列是否符合a、b组合
                if (validate(a, b)) {
                    return true;
                }
            }
        }
    }
    return false;

    function validate(a, b) {
        var i = a.length + b.length;

        do {
            var sum = (Number(a) + Number(b)).toString();
            var sub = num.substring(i, i + sum.length);

            if (sum !== sub) {
                return false;
            }
            a = b;
            b = sum;
            i += sum.length;
        } while (i < num.length);
        return true;
    }
};

var num = "112358";
// num = "112"
num = "199100199";
num = "101";
num = "0235813";
var ans = isAdditiveNumber(num);
console.log(ans);
