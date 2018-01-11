// 找到两个列表的映射

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    var res = [],
        len = A.length;
    for(var i = 0; i < len; ++i){
        var index = B.indexOf(A[i]);
        if (res.indexOf(index) > -1){
            index = B.indexOf(A[i], index);
        }
        res.push(index)
    }
    return res;
};

var a = [12,28,46,32,50],
    b = [50,12,32,46,28]
var res = anagramMappings(a, b)
console.log(res)