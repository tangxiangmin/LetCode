/**
 * @param {number} num
 * @return {string}
 */
// num范围1~3999
var intToRoman = function (num) {
    var nums = num.toString().split('').reverse() // 按[个,十,百...]的顺序
    var fiveMap = {
        0: 'V',
        1: 'L',
        2: 'D'
    }
    var oneMap = {
        0: 'I',
        1: 'X',
        2: 'C',
        3: 'M'
    }
    var fourMap = {
        0: 'IV',
        1: 'XL',
        2: 'CD'
    }
    var nineMap = {
        0: 'IX',
        1: 'XC',
        2: 'CM'
    }
    var ans = ''
    nums.forEach((ch, index) => {
        ch = parseInt(ch)
        var str = ''
        if (ch == 9) {
            str += nineMap[index]
        } else {
            if (ch >= 5) {
                str += fiveMap[index]
                ch -= 5
            }
            if (ch == 4) {
                str += fourMap[index]
            } else {
                // 拼接1
                for (var i = 0; i < ch; ++i) {
                    str += oneMap[index]
                }
            }
        }
        ans = str + ans
    })
    return ans
};

var num = 1994 // [4, 9, 9, 1] => [IV, XC, CM, M] => 逆序拼接 MCMXCIV
num = 58 // [8, 5] => [VIII, L] => LVIII
// num = 81 // [1, 8] => [I, LXXX]=>LXXXI
var res = intToRoman(num)
console.log(res)