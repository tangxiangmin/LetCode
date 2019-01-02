/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    let res = [];
    for(let i = 0;i < n; ++i){
        res.push(0)
    }

    let l = 1;
    let r = n;

    for (let i = 0; i <= (n - 1 - k); ++i){
        res[i] = l++;
    }
    for (let i = l - 1; i < res.length; i = i + 2) {
        res[i] = r;
        if (i + 1 < res.length){
            res[i + 1] = l;
        }else{
            break
        }
        r--;
        l++;
    }
    return res; 
};
constructArray(3,2);