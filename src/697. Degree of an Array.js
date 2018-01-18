// 数组的degree定义：元素出现频率的最大值
// 给定一个数组，找到degree值相同且最短的子数组，返回其长度

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    function findDegree(arr){
        let map = {};
        for (var i = 0; i < arr.length; ++i){
            let item = arr[i];
            if (!map[item]){
                map[item] = 0;
            }
            map[item]++;
        }
      
        var max = 0;
        var res = [];
        for (var key in map){
            var len = map[key];
            var item = { element: key-0, length: len };
            if(len > max){
                res = [item];
                max = len;
            }else if(len == max){
                res.push(item);
                max = len;
            }
        }
        return res;
    }
    // 找到指定元素degree的子数组
    function findSubArrLength(arr, item){
        var start = arr.indexOf(item),
            end = arr.lastIndexOf(item)

        return end - start + 1;
    }

    var degrees = findDegree(nums)
    let min = nums.length;
    for (var i = 0; i < degrees.length; ++i){
        let item = degrees[i];
        let num = item.element;
        let len = findSubArrLength(nums, num);

        if (len < min) {
            min = len;
        }
    }

    return min;
};

var res = findShortestSubArray([1, 2, 2, 3, 1, 4, 2]);
console.log(res)
