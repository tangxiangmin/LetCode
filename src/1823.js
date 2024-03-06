/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 先BF一下，使用队列来保存，这样可以将队首的元素弹出，不会出现队列某个索引值为空的情况
var findTheWinner = function (n, k) {
    const queue = [];
    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }
    while (queue.length > 1) {
        for (let i = 1; i < k; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
    }
    return queue[0];
};
