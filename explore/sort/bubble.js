var bubbleSort = function(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 1; j < arr.length - i; ++j) {
            if (arr [j] < arr[j - 1]) {
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
    return arr;
};

// 优化思路1
// 在每一个内层循环中，如果没有可交换的元素，则说明数组已经是排序的，那么就可以直接跳出外部循环
var bubbleSort2 = function(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var isSorted = true; // 增加数组是否已排序的标志
        for (var j = 1; j < arr.length - i; ++j) {
            if (arr [j] < arr[j - 1]) {
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }
    }
    return arr;
};

// 优化思路2
// 在每一次外部循环之后，我们都假设数组后i个元素已经是有序的，因此内层循环的边界是 arr.length - i ，但实际上有序数组的长度可能更大，因此可以节省需要比较的

var bubbleSort3 = function(arr) {
    var len = arr.length;
    var sortBorder = len; // 记录无序数组的边界， 前sortBorder个是无序的，后len - sortBorder 个是有序的

    for (var i = 0; i < len; ++i) {
        var isSorted = true; // 增加数组是否已排序的标志
        var lastSort = len - i;
        for (var j = 1; j < sortBorder; ++j) {
            if (arr [j] < arr[j - 1]) {
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
                isSorted = false;
                lastSort = j; // 保存最后一次交换位置的位置
            }
        }

        sortBorder = lastSort;
        if (isSorted) {
            break;
        }
    }
    return arr;
};

// 优化思路3
// 针对大多数元素已排序的情况，如[ 2, 3, 4, 5, 6, 7, 1, 8 ]，
// 使用 "鸡尾酒排序" 可以减少更多的比较次数：第一次从左向右比较，把最大的数冒泡在后面；第二次从右向左比较，把较小的数冒泡在前面
// 这种算法又称为"双向冒泡排序"

var cocktailSort = function(arr) {
    var len = arr.length;

    for (var i = 0; i < Math.floor(len / 2); ++i) {
        // 将较大的元素冒泡到后面
        var isSorted = true;
        for (var j = i; j < len - i; ++j) {
            if (arr[j - 1] > arr[j]) {
                swap(j - 1, j);
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }
        // 将较小的元素冒泡到前面
        isSorted = true;
        for (var j = len - 1; j > i; --j) {
            if (arr[j] < arr[j - 1]) {
                swap(j - 1, j);
                isSorted = true;
            }
        }
        if (isSorted) {
            break;
        }
    }

    return arr;

    function swap(i, j) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
};

var arr = [2, 3, 4, 5, 6, 7, 1, 8];
// console.log(arr);
// console.log(bubbleSort2(arr))
console.log(cocktailSort(arr));
