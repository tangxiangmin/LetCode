/**
 * @param {string} seq
 * @return {number[]}
 */
// 思路：找到deep最大的子字符串，然后拆分
var maxDepthAfterSplit = function(seq) {
    var ans = []
    var d = 0 // 记录当前)括号的深度
    for(var ch of seq){
        if(ch === '('){
            d += 1
            ans.push(d%2) // 保证括号一半属于A,一半属于B
        }else {
            ans.push(d%2)
            d-=1
        }
    }
    return ans

};

var seq = '()(())()' // A:()(), B:()()

seq = "(()())"

var res = maxDepthAfterSplit(seq) // [0,0,0,1,1,0,1,1] -> (()
console.log(res)