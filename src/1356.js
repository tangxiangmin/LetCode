/**
 * @param {number[]} arr
 * @return {number[]}
 */

var sortByBits = function(arr) {

    var list = arr.map(num=>{
        return {
            val: num,
            count1: calcOneNum(num)
        }
    })
    return list.sort((a,b)=>a.count1 - b.count1 || a.val - b.val).map(item=>item.val)

    function calcOneNum(n){
        var str = n.toString(2)
        var ans = 0
        for(var i = 0; i < str.length; ++i){
            var ch = str[i]
            if(ch === '1') ans++
        }
        return ans
    }
};
var nums = [1024,512,256,128,64,32,16,8,4,2,1]
var res=  sortByBits(nums)
console.log(res)