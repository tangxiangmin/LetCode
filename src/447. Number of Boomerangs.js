/**
 * Created by admin on 2017/4/15.
 */
// 给定一组点的坐标[x,y],找到[i,j,k]点数组，其中i到j的距离等于i到k的距离

// 解法1：能得到正确结果但是超时
// var numberOfBoomerangs = function(points) {
//     function getDistance(a, b){
//         return Math.pow(a[0]-b[0], 2) + Math.pow(a[1]-b[1], 2);
//     }
//
//     var tmp = {},
//         len = points.length,
//         sum = 0;
//
//     for (var i = 0; i < len - 1; ++i){
//         for (var j = i + 1; j < len; ++j){
//             var dis = getDistance(points[i], points[j]);
//
//             if (tmp[dis] === undefined){
//                 tmp[dis] = [];
//             }else {
//                 // 遍历当前同距离的元组数组，如果存在相同的点索引值，则表示符合条件
//                 var tuple = tmp[dis],
//                     lenTuple = tuple.length;
//
//                 for (var k = 0; k < lenTuple; ++k){
//                     if (~tuple[k].indexOf(i) || ~tuple[k].indexOf(j)){
//                         sum += 2;
//                     }
//                 }
//             }
//
//             tmp[dis].push([i, j]);
//         }
//     }
//     return sum;
// };

var numberOfBoomerangs = function(points) {
    function getDistance(a, b){
        // 这里省略了开平方
        // 然后就不超时了尼玛
        return Math.pow(a[0]-b[0], 2) + Math.pow(a[1]-b[1], 2);
    }

    var len = points.length,
        sum = 0;

    for (var i = 0; i < len; ++i){

        // 统计每个点到其他点的距离
        var tmp = {};
        for (var j = 0; j < len; ++j){
            if (i === j){
                continue;
            }

            var dis = getDistance(points[i], points[j]);

            !tmp[dis] && (tmp[dis] = 0);
            tmp[dis] += 1;
        }

        for (var key in tmp){
            var num = tmp[key];
            // 排列组合计算结果
            sum += num * (num-1);
        }
    }

    return sum;
};


// var test = [[0,0],[1,0],[2,0]];
var test = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];
console.log(numberOfBoomerangs(test));

// console.time("do");
// var res = numberOfBoomerangs(test);
// console.timeEnd("do");
// console.log(res);
