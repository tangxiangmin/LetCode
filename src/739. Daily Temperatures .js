/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let res = []
    for(let i = 0; i < T.length; ++i){
        let count = 0
        for(let j = i; j < T.length; ++j){
            if(T[j] <= T[i]){
                count++
            }else {
                break
            }
        }
        if(count === T.length - i){
            count = 0
        }
        res.push(count)
    }
    return res
};

var arr = [73, 74, 75, 71, 69, 72, 76, 73]

dailyTemperatures(arr)