// 翻转图片，二维数组先每行reserve，再对每个元素取反

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    return A.map(item=>{
        var row = item.reverse()
        return row.map(el=>{
            return ~el + 2
        })
    })
};

var input = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
var output = flipAndInvertImage(input);
console.log(output)