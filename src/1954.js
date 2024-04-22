/**
 * @param {number} neededApples
 * @return {number}
 */
// 思路，买下的是正方形土地，边长增加，数量会增加，因此实际上是一个递增序列，可以二分
var minimumPerimeter = function (neededApples) {

    let left = 1, right = 100000, ans = 0;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (calc(mid) >= neededApples) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans * 8;

    function calc(n) {
        return 2 * n * (n + 1) * (2 * n + 1)
    }

};

minimumPerimeter(1000)