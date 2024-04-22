/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 需要优化代码
var combinationSum3 = function (k, n) {
    function combin(k, n, exclude) {
        if (n === 45) {
            return [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
        } else if (n > 45) {
            return []
        } else if (n < 1) {
            return []
        }

        if (k === 1) {
            if (n == exclude || n > 9) {
                return []
            }
            return [[n]];
        }

        let res = []
        let hash = {}
        let len = Math.min(n, 9)
        for (let i = 1; i < len; ++i) {
            let item = [i];
            let subs = combin(k - 1, n - i, i);
            if (subs.length) {
                subs.forEach(sub => {
                    if (sub && sub.indexOf(i) === -1) {
                        let val = item.concat(...sub);
                        let key = val.sort((a, b) => a - b).join(" ");
                        if (!hash[key]) {
                            hash[key] = true;
                            res.push(val);
                        }
                    }
                });
            }
        }
        return res
    }
    return combin(k, n)
};

var combinationSum3 = function (k, n) {
    const ans = []
    const path = []
    const used = []
    function backtrack(n, k) {
        if (n == 0 && k == 0) {
            const list = [...path]
            list.sort((a, b) => a - b)
            const key = list.join(',')
            if (used[key]) return
            used[key] = true
            ans.push(list)
            return
        }
        if (n === 0 || k == 0) return

        for (let i = 1; i <= 9; ++i) {
            if (path.includes(i)) continue
            path.push(i)
            backtrack(n - i, k - 1)
            path.pop()
        }
    }
    backtrack(n, k)
    return ans

}

// let res = combinationSum3(9, 45);
var k = 3, n = 7
k = 3, n = 9
var ans = combinationSum3(k, n)
console.log(JSON.stringify(ans))
