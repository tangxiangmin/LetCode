/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
    if (cost1 < cost2) {
        return waysToBuyPensPencils(total, cost2, cost1);
    }
    let res = 0, cnt = 0;
    while (cnt * cost1 <= total) {
        res += parseInt((total - cnt * cost1) / cost2) + 1;
        cnt++;
    }
    return res;
};


var total = 20, cost1 = 10, cost2 = 5
total = 5, cost1 = 10, cost2 = 10
var ans = waysToBuyPensPencils(total, cost1, cost2)
console.log(ans)