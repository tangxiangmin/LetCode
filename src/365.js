/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (x + y < z) {
        return false;
    }
    if (x == 0 || y == 0) {
        return z == 0 || x + y == z;
    }

    return z % gcd(x, y) == 0;

    function gcd() {
        if (arguments.length == 2) {
            if (arguments[1] == 0) return arguments[0];
            else return gcd(arguments[1], arguments[0] % arguments[1]);
        } else if (arguments.length > 2) {
            var result = gcd(arguments[0], arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                result = gcd(result, arguments[i]);
            return result;
        }
    }
};

// 例子解析x = 3, y = 5, z = 4
// 接满k3，倒入k5，此时k5还剩2升装满
// 再次接满k3，倒入k5至刚好满，此时k3中剩1升水
// 将k5清空，将k3中的1升水倒入5，然后接满k3，全部倒入k5
// 此时k5的数量为 1 + 3 = 4，完成
