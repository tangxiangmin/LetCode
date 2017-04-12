/**
 * Created by admin on 2017/4/12.
 */

// 电子表上面1,2,4,8，将点亮的灯对应的数相加表示小时（0-11）
// 电子表下面1,2,4,8,16,32表示分钟（0-59）
// 给定一个数表示亮灯的数目，返回电子表可表示的时间
// 可以发现上面最多亮三展灯(1,2,8)，下面最多亮5展灯(1,2,8,16,32)

var readBinaryWatch = function(num) {
    var hours = [1, 2, 4, 8],
        minutes = [1, 2, 4, 8, 16, 32];

    var res = [];

    function getSubArr(arr, len) {
        console.log(arr);
        var res = [];
        for (var i = 0, length = arr.length; i < length - len; ++i){
            var tmp = [];
            for(var j = i; j < len+i; ++i){
                tmp.push(arr[j]);
            }
            res.push(tmp);
        }
        return res;
    }

    console.log(getSubArr(hours, 2));

    function getHour(i) {
        if (i === 0){
            return ["0"];
        }
        switch (i){
            case 0:
                return ["0"];
            case 1:
                return ["1", "2", "4", "8"];
            case 2:
                return ["3", "5", "6","10"];
            case 3:
                return ["11"];
        }
    }
    // for (var i = 0; i < 3; ++i){
    //     var hour = getHour(i);
    //
    //     for (var j = 0;j < num - i; ++j){
    //
    //     }
    // }
};

readBinaryWatch();