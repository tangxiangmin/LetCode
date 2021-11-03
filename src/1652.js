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

// const code = [5, 7, 1, 4],k = 3;
const code = [2, 4, 9, 3],
    k = -2;

const ans = decrypt(code, k);
console.log(ans);
