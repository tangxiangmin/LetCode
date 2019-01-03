/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 需要优化代码
var combinationSum3 = function (k, n) {
    function combin(k, n, exclude){
        if(n === 45 ){
            return [[1,2,3,4,5,6,7,8,9]]
        }else if(n > 45){
            return false
        }else if (n < 1) {
            return false
        }

        if (k === 1) {
            if (n == exclude || n > 9){
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

// let res = combinationSum3(9, 45);
console.log(res)
