/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    // 每个人先分1块
    var total = money - children;
    if (total < 0) return -1;
    var ans = Math.min(Math.floor(total / 7), children);
    var left = total - ans * 7;
    if (left !== 0 && ans === children) {
        // 每个人都分了8块钱，但还有剩下的钱，让一个人把剩余的都拿走
        ans--;
    } else if (left == 3 && ans === children - 1) {
        // 最后1个人会分到4块钱，需要再拆一个8元的
        ans--;
    }
    return ans;
};

var money = 20,
    children = 3;

(money = 16), (children = 2);
money = 23;
children = 2;

var ans = distMoney(money, children);
console.log(ans);
