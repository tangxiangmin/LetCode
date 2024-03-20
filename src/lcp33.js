const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')

/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
// 贪心，肯定是先升级再倒水更划算
var storeWater = function (bucket, vat) {

    const queue = new MaxPriorityQueue()
    const n = bucket.length

    let cnt = 0;

    for (let i = 0; i < n; ++i) {
        if (bucket[i] === 0 && vat[i] !== 0) {
            ++cnt;
            ++bucket[i];
        }
        if (vat[i] > 0) {
            queue.enqueue(i, Math.ceil(vat[i] / bucket[i]));
        }
    }
    if (queue.isEmpty()) return 0

    let res = Infinity;
    while (cnt < res) {
        // console.log('xxx', cnt, res)
        // console.log(JSON.stringify(queue.toArray()))

        const { priority: v, element: i } = queue.dequeue()
        // 当「升级水桶」的操作次数已经不能再减少总的操作次数时，会跳出循环
        res = Math.min(res, cnt + v);
        if (v === 1) {
            break;
        }
        const t = Math.floor((vat[i] + v - 2) / (v - 1));
        cnt += t - bucket[i];
        bucket[i] = t;
        queue.enqueue(i, Math.ceil(vat[i] / bucket[i]));
    }

    return res
};


var bucket = [1, 3], vat = [6, 8]
bucket = [9, 0, 1], vat = [0, 2, 2]
bucket = [0], vat = [0]
bucket = [0], vat = [1]
bucket = [16, 29, 42, 70, 42, 9], vat = [89, 44, 50, 90, 94, 91]
var ans = storeWater(bucket, vat)
console.log(ans)