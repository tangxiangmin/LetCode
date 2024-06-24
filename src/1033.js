/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
    // 保证abc的顺序
    const list = [a, b, c]
    list.sort((a, b) => a - b)

    a = list[0]
    b = list[1]
    c = list[2]

    if (b - a === 1 && c - b == 1) {
        return [0, 0]
    }
    // [ab...c] 或者[a.b...c]的情况，只需要挪动一次就可以三个相连，其他情况需要将ac都挪动到b的附近，所以为2
    const min = (b - a === 1 || c - b === 1) || (c - b === 2 || b - a === 2) ? 1 : 2
    // 最大就是a和c每次只移动一步，分别需要挪动b-a-1和c-b-1次
    const max = c - b - 1 + b - a - 1
    return [min, max]
};


var a = 1, b = 2, c = 5
a = 4, b = 3, c = 2
a = 3, b = 5, c = 1
var ans = numMovesStones(a, b, c)
console.log(ans)