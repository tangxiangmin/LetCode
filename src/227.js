/**
 * @param {string} s
 * @return {number}
 */

// 思路：解析表达式，处理运算符优先级

var calculate = function (s) {
    var arr = []

    for (var i = 0; i < s.length; ++i) {
        var ch = s[i]
        if (isSpace(ch)) continue;
        if (isSymbol(ch)) {
            arr.push(ch)
        } else {
            var num = s[i]
            while (i < s.length && isNum(s[i + 1])) {
                num += s[i + 1]
                i++
            }
            arr.push(num)
        }
    }
    while (true) {
        if (arr.length === 1) {
            return arr[0]
        }

        for (var i = 0; i < arr.length; ++i) {
            var ch = arr[i]
            if (ch === '*' || ch === '/') {
                var prev = arr[i - 1]
                var next = arr[i + 1]

                var res = ch === '*' ? prev * next : Math.floor(prev / next)
                arr.splice(i - 1, 3, res)
                i = i - 1
            }
        }
        for (var i = 0; i < arr.length; ++i) {
            var ch = arr[i]
            if (ch === '+' || ch === '-') {
                var prev = +arr[i - 1]
                var next = +arr[i + 1]

                var res = (ch === '+') ? prev + next : prev - next
                arr.splice(i - 1, 3, res)
                i = i - 1
            }
        }
    }

    function isNum(ch) {
        return /^\d$/.test(ch)
    }
    function isSpace(ch) {
        return ch === ' '
    }
    function isSymbol(ch) {
        return /[+*\/\-]/.test(ch)
    }

};

// 上面的代码在处理超长字符串时会超时，因此在遍历时就处理高优先级的*和/
var calculate = function (s) {
    var arr = []
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i]
        if (isSpace(ch)) continue;
        if (isSymbol(ch)) {
            arr.push(ch)
        } else {
            var num = s[i]
            while (i < s.length && isNum(s[i + 1])) {
                num += s[i + 1]
                i++
            }
            var lastSymbol = arr.pop()

            // 处理乘法和除法
            if (lastSymbol) {
                if (lastSymbol === '*') {
                    var prevNum = arr.pop()
                    arr.push(prevNum * num)
                } else if (lastSymbol === '/') {
                    var prevNum = arr.pop()
                    arr.push(Math.floor(prevNum / num))
                } else {
                    // 重新保存
                    arr.push(lastSymbol)
                    arr.push(num)
                }
            } else {
                arr.push(num)
            }
        }
    }

    var ans = parseInt(arr[0])
    for (var i = 1; i < arr.length; i += 2) {
        var ch = arr[i]
        var next = arr[i + 1]
        if (ch === '+') {
            ans += parseInt(next)
        } else {
            ans -= next
        }
    }
    return ans

    function isNum(ch) {
        return /^\d$/.test(ch)
    }
    function isSpace(ch) {
        return ch === ' '
    }
    function isSymbol(ch) {
        return /[+*\/\-]/.test(ch)
    }
}

var s = "3+2*2"
s = "42"
s = "1+1+1"
s = "100-1-2-3-4-5-6-7-8-9-10"

var res = calculate(s)
console.log(res)