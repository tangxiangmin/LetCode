/**
 * Created by admin on 2017/10/1.
 */
// 找到相同爱好的餐厅，且按照索引值之和排序
// 使用hash
var findRestaurant = function (list1, list2) {
    var hashMap = {};
    list1.forEach((item, index) => {
        hashMap[item] = index;
    })

    var res = [],
        minIndex = Number.MAX_VALUE;
    list2.forEach((item, index) => {
        if (typeof hashMap[item] !== 'undefined') {
            var indexTotal = hashMap[item] + index;
            if (minIndex > indexTotal) {
                minIndex = indexTotal;
                res = [item];
            } else if (minIndex === indexTotal) {
                res.push(item);
            }
        }
    });
    return res
};

var a = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    b = ["KFC", "Shogun", "Burger King"];

console.log(findRestaurant(a, b));