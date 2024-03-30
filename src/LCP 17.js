/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let x = 1
    let y = 0
    const handlers = {
        A,
        B
    }
    for (const ch of s) {
        handlers[ch]()
    }
    return x + y

    function A() {
        x = 2 * x + y
    }
    function B() {
        y = 2 * y + x
    }
};