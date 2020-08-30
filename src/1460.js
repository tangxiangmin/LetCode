/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const sort = (a,b)=>a-b
    target.sort(sort)
    arr.sort(sort)
    let len = target.length
    
    for(let i = 0; i< len; ++i){
        if(target[i] !== arr[i]) return false
    }
    return true
};