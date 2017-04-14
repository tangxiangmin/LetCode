/**
 * Created by admin on 2017/4/12.
 */

// 电子表上面1,2,4,8，将点亮的灯对应的数相加表示小时（0-11）
// 电子表下面1,2,4,8,16,32表示分钟（0-59）
// 给定一个数表示亮灯的数目，返回电子表可表示的时间
// 可以发现上面最多亮三展灯(1,2,8)，下面最多亮5展灯(1,2,8,16,32)

var readBinaryWatch = function(num) {
    function getMinutes(num) {
        switch (num){
            case 0:
                return ["00"];
            case 1:
                return ["01", "02", "04", "08", "16", "32"];
            case 2:
                return ["10", "12", "17", "18", "20", "24", "03", "33", "34", "36", "40", "48", "05", "06", "09"];
            case 3:
                return ["11", "13", "14", "19", "21", "22", "25", "26", "28", "35", "37", "38", "41", "42", "44", "49", "50", "52", "56", "07"];
            case 4:
                return ["15", "23", "27", "29", "30", "39", "43", "45", "46", "51", "53", "54", "57", "58"];// "60"舍弃
            case 5:
                return ["31", "47", "55", "59"];//  "61", "62"舍弃
        }
    }
    function getHour(num) {
        switch (num){
            case 0:
                return ["0"];
            case 1:
                return ["1", "2", "4", "8"];
            case 2:
                return ["3", "5", "6", "9", "10"];
            case 3:
                return ["7", "11"];
        }
    }

    var res = [];
    for (var k = 0; k <= num && k <= 3; ++k){
        var hours = getHour(k);
        var minutes = getMinutes(num - k) || [];
        for (var i = 0, lenH = hours.length; i < lenH; ++i){
            for (var j = 0, lenM = minutes.length; j < lenM; ++j){
                var val = hours[i] + ":" + minutes[j];
                res.push(val);
            }
        }
    }
    return res;
};

console.log(readBinaryWatch(2));

// 这里由于出现的排列组合都是有限的，所以另外写了一个脚本预先将结果进行计算
// var arr = [1,2,4,8,16,32],
// var arr = [1,2,4,8],
// 	total = arr.length,
// 	len = 2;
// var res = [];
// for (var i = 0; i < total - 1; ++i){
// 	for (var j = i + 1; j < total - 0; ++j){
// 			res.push([arr[i], arr[j]])
// 	}
// }
// for (var i = 0; i < total - 2; ++i){
// 	for (var j = i + 1; j < total - 1; ++j){
// 		for ( var k = j+1; k < total - 0; ++k){
// 			res.push([arr[i], arr[j], arr[k]])
// 		}
// 	}
// }
// for (var i = 0; i < total - 3; ++i){
// 	for (var j = i + 1; j < total - 2; ++j){
// 		for ( var k = j+1; k < total - 1; ++k){
// 			for ( var a = k+1; a < total - 0; ++a){
// 				res.push([arr[i], arr[j], arr[k], arr[a]])
// 			}
// 		}
// 	}
// }

// for (var i = 0; i < total - 4; ++i){
// 	for (var j = i + 1; j < total - 3; ++j){
// 		for ( var k = j+1; k < total - 2; ++k){
// 			for ( var a = k+1; a < total - 1; ++a){
// 				for ( var b = a+1; b < total; ++b){
// 					res.push([arr[i], arr[j], arr[k], arr[a],  arr[b]])
// 				}
// 			}
// 		}
// 	}
// }

// var sumArr = [];
// res.forEach((val)=>{
//     console.log(val)
// var sum = val.reduce((acc, val)=>{
//         return acc +val
//     },0);
//
// sumArr.push(sum + "");
// })
//
// function unique(arr){
//     var s = arr.sort();
//     var newArr = [s[0]];
//
//     for (var i = 0; i < s.length; ++i){
//         if (s[i] != newArr[newArr.length-1]){
//             newArr.push(s[i]);
//         }
//     }
//     return newArr;
// }
//
// console.log(unique(sumArr));
