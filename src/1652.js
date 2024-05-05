/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let ans = [];
    for (let i = 0; i < code.length; ++i) {
        if (k === 0) {
            ans[i] = 0;
        } else if (k > 0) {
            let sum = 0;
            let j = 1;
            while (j <= k) {
                let idx = i + j;
                if (idx >= code.length) {
                    idx -= code.length;
                }

                sum += code[idx];
                j++;
            }
            ans[i] = sum;
        } else if (k < 0) {
            let sum = 0;
            let j = 1;
            while (j <= -k) {
                let idx = i - j;
                if (idx < 0) {
                    idx += code.length;
                }

                sum += code[idx];
                j++;
            }
            ans[i] = sum;
        }
    }
    return ans;
};

// 局部前缀和
var decrypt = function (code, k) {
    const n = code.length
    if (k === 0) return new Array(n).fill(0)
    if (k > 0) {
        return calc1()
    }
    k = -k
    return calc2()


    function calc1() {
        const ans = []
        let sum = 0
        for (let i = 0; i <= k; ++i) {
            sum += code[i]
        }
        for (let i = 0; i < n; ++i) {
            sum -= code[i]
            ans[i] = sum
            let idx = i + k + 1
            if (idx >= n) {
                idx = idx % n
            }
            sum += code[idx]
        }
        return ans
    }

    function calc2() {
        const ans = []
        let sum = 0
        for (let i = n - k; i < n; ++i) {
            sum += code[i]
        }

        for (let i = 0; i < n; ++i) {
            ans[i] = sum
            let idx = n - k + i
            if (idx >= n) {
                idx = idx % n
            }
            sum -= code[idx]
            sum += code[i]
        }
        return ans
    };
}

var code = [5, 7, 1, 4], k = 3;
code = [2, 4, 9, 3], k = -2;

var ans = decrypt(code, k);
console.log(ans);
