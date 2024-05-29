/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
// 还有最后几个测试用例会超时
var queryResults = function (limit, queries) {
    const balls = new Array(limit + 1).fill(0) // 0表示没染色
    const map = new Map()
    let zero = 0
    return queries.map(([x, y]) => {
        const bucket = map.get(balls[x])
        if (bucket) {
            bucket.delete(x)
            if (bucket.size == 0) {
                zero++
            }
        }

        const newBucket = map.get(y)
        if (!newBucket) {
            newBucket = new Map()
            map.set(y, newBucket)
        } else if (newBucket.size === 0) {
            zero--
        }

        newBucket.set(x, 1)
        balls[x] = y
        return map.size - zero
    })
};

var queryResults = function (limit, queries) {
    let ans = new Array(queries.length).fill(0);
    let color = new Map();
    let cnt = new Map();

    for (let i = 0; i < queries.length; i++) {
        let q = queries[i];
        let x = q[0];
        let y = q[1];

        if (color.has(x)) {
            let c = color.get(x);
            if (cnt.has(c)) {
                cnt.set(c, cnt.get(c) - 1);
                if (cnt.get(c) === 0) {
                    cnt.delete(c);
                }
            }
        }

        color.set(x, y);
        if (cnt.has(y)) {
            cnt.set(y, cnt.get(y) + 1);
        } else {
            cnt.set(y, 1);
        }

        ans[i] = cnt.size;
    }

    return ans;
}
var limit = 4, queries = [[1, 4], [2, 5], [1, 3], [3, 4]]
// limit = 4, queries = [[0, 1], [1, 2], [2, 2], [3, 4], [4, 5]]
// limit = 1, queries = [[0, 1], [0, 4], [0, 4], [0, 1], [1, 2]]
var ans = queryResults(limit, queries)
console.log(ans)