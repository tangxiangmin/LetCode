/**
 * Created by admin on 2017/6/14.
 */
// 给定n枚硬币，排列成一个梯子形状，梯子的第k行有k枚硬币
// 求组成的梯子的行数（最后硬币可以剩余）

// 思路：等差数列求和
var arrangeCoins = function(n) {
    if (n<=1) return n;

    function sum(row) {
        return (1 + row)*row/2;
    }

    for (var i = 1; i <= n; ++i){
        if (sum(i) > n){
            return i - 1;
        }
    }
};

console.log(arrangeCoins(3));
