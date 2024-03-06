/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
// 经典递归问题，将A上面的n个盘子借助B移动到C，等于n-1个盘子借助C移动到B，然后将第n个盘子直接移动到C
var hanota = function (A, B, C) {
    function move(n, A, B, C) {
        if (n === 1) {
            C.unshift(A.shift())
            return
        }
        move(n - 1, A, C, B)
        C.unshift(A.shift())
        move(n - 1, B, A, C)
    }

    move(A.length, A, B, C)
};

var A = [2, 1, 0], B = [], C = []
A = [3, 2, 1, 0]
var ans = hanota(A, B, C)
console.log(A, B, C)