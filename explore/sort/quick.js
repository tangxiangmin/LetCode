// 快排，确定一个基准值，找到比该基准值小的值l,和比该基准值打的值r，使用分治法，对两个数组再次进行快排即可
var quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0];
    var l = [];
    var r = [];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < pivot) {
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }

    return quickSort(l).concat(pivot).concat(quickSort(r));
};


var arr = [2, 3, 4, 5, 6, 7, 1, 8];
console.log(quickSort(arr));
