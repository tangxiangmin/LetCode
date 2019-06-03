/**
 * @param {number[]} heights
 * @return {number}
 * 将数据排序后，比较不同位置的元素即可
 */
var heightChecker = function(heights) {
    let sum = 0
    var origin =heights.slice()
    heights.sort((a,b)=>{
        return a - b
    })
    for(var i = 0; i < heights.length; ++i) {
        if(origin[i]!=heights[i]){
            sum++
        }
    }
    return sum
};
