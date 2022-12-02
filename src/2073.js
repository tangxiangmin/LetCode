/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
// 思路1 BF
var timeRequiredToBuy = function (tickets, k) {
    var ans = 0;
    var num = tickets[k];
    for (var i = 0; i < num; ++i) {
        for (var j = 0; j < tickets.length; ++j) {
            if (tickets[j] > 0) {
                tickets[j]--;
                ans++;
            }
            if (j === k && tickets[k] === 0) {
                return ans;
            }
        }
    }
    return ans;
};

var tickets = [2, 3, 2],
    k = 2;

(tickets = [5, 1, 1, 1]), (k = 0);
(tickets = [84, 49, 5, 24, 70, 77, 87, 8]), (k = 3);
var ans = timeRequiredToBuy(tickets, k);

console.log(ans);
