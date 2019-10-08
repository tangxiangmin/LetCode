/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 计数排序，用空间换时间 https://baike.baidu.com/item/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F/8518144?fr=aladdin
 */
var relativeSortArray = function (arr1, arr2) {
    var map = []
    // 首先统计出现在arr1中的元素，相同元素对应索引值+1
    for (var i = 0; i < arr1.length; ++i) {
        var cur = arr1[i]
        if (!map[cur]) {
            map[cur] = 0
        }
        map[cur]++
    }
    // 按照arr2的元素进行排序
    var ans = []
    for (var i = 0; i < arr2.length; ++i) {
        var cur = arr2[i]
        while (map[cur]) {
            ans.push(cur)
            map[cur]--
        }
    }
    // 处理不在arr2中的元素
    for (var i = 0; i < map.length; ++i) {
        while (map[i]) {
            ans.push(i)
            map[i]--
        }
    }
    return ans
};
var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
// [2,2,2,1,4,3,3,9,6,7,19]
var res = relativeSortArray(arr1, arr2)
console.log(res)