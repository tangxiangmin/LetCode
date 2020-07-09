/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
// bf，内存会溢出
var divingBoard = function(shorter, longer, k) {
    if(!k) return []
    var ans = [0]
    while(k--){
        var arr = []
        ans.forEach(item=>{
            arr.push(item + shorter)
            arr.push(item + longer)
        })
        ans = arr
    }
    return Array.from(new Set(ans))
};
// 思路2：数学推导
var divingBoard = function(shorter, longer, k) {
    if(!k) return []
    if(shorter === longer) {
        return [k*shorter]
    }
    var ans = []
    for(var i =0 ;i<=k; ++i){
        ans[i] = shorter * (k - i) + longer * i;
    }
    return ans
};
var shorter = 1, longer = 2, k = 3
var res = divingBoard(shorter, longer, k)
console.log(res)