
/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
    const [h, m] = s.split(':')
    return `${getHour(h)}:${getMin(m)}`

    function getHour(h) {
        let a = h[0]
        let b = h[1]
        if (a === '?' && b === '?') {
            return '11'
        }

        if (a === '?') {
            if (b === '1' || b == '0') {
                return '1' + b
            } else {
                return `0${b}`
            }
        } else if (b === '?') {
            if (a === '1') {
                return '11'
            } else {
                return `09`
            }
        } else {
            return h
        }
    }

    function getMin(m) {
        let a = m[0]
        let b = m[1]
        if (a === '?' && b === '?') {
            return '59'
        }
        if (a === '?') {
            return '5' + b
        } else if (b === '?') {
            return a + '9'
        } else {
            return m
        }
    }

};

var s = "1?:?4"
s = "0?:5?"
s = "?0:40"
s = "?0:40"
var ans = findLatestTime(s)
console.log(ans)