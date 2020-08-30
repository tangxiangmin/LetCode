const { type } = require("os");

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var map = arr.reduce((acc, num)=>{
        if(!acc[num]) acc[num] = 0
        acc[num]++
        return acc
    }, {})


    var ans 
    for(let key in map){
        var num= parseInt(key, 10)
        if(num === map[key]){
            if(typeof ans === 'undefined'){
                ans = num
            }else if(ans < num){
                ans = num
            }
        }
    }

    return typeof ans === 'undefined' ? -1 : ans
};