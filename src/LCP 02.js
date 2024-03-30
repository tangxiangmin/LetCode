/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {

    function dfs(i) {
        if (i === cont.length - 1) {
            return [cont[i], 1]
        }
        const [a, b] = dfs(i + 1)

        // cont[i] +  1 / (a / b)
        return [cont[i] * a + b, a]
    }
    return dfs(0)
};
var cont = [3, 2, 0, 2]
cont = [0, 0, 3]
var ans = fraction(cont)
console.log(ans)