/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
    const mod = 10 ** 9 + 7
    horizontalCuts.push(0)
    horizontalCuts.push(h)

    horizontalCuts.sort((a, b) => a - b)

    verticalCuts.push(0)
    verticalCuts.push(w)
    verticalCuts.sort((a, b) => a - b)

    function findMax(arr) {
        let ans = 0
        for (let i = 1; i < arr.length; ++i) {
            ans = Math.max(ans, arr[i] - arr[i - 1])
        }
        return ans
    }
    const maxW = findMax(verticalCuts)
    const maxH = findMax(horizontalCuts)

    return Number(BigInt(maxW) * BigInt(maxH) % BigInt(mod))
};
var h = 5, w = 4, horizontalCuts = [1, 2, 4], verticalCuts = [1, 3]
h = 5, w = 4, horizontalCuts = [3, 1], verticalCuts = [1]
h = 1000000000, w = 1000000000, horizontalCuts = [2], verticalCuts = [2]
var ans = maxArea(h, w, horizontalCuts, verticalCuts)

console.log(ans)