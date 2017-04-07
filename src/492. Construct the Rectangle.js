/**
 * Created by admin on 2017/4/7.
 */
var constructRectangle = function(area) {
    var length = area,
        width = 1;

    for(var w = 2, sqrt = Math.sqrt(area); w <= sqrt; ++w){
        if(area % w === 0) {
            var l = area/w;
            if (l - w < length - width){
                length = l;
                width = w;
            }
        }
    }

    return [length, width];
};


var test = 12;
console.log(constructRectangle(test));