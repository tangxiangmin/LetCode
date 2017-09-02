/**
 * Created by admin on 2017/8/6.
 */
// 找到字符串中的颠倒子字符串，并返回其索引
// abc的颠倒子字符串为 bac cba，即只有字符顺序不同的字符串
// 思路： 主要是判断是否为颠倒子字符串，
    // 1.起初将目标子字符串p与截取字符串sub进行排序，然后相等则为真，第34个测试用例超时了
    // 2.使用一个字典来保存p的各字符出现次数，然后与sub进行比较即可，同样会超时
    // 3.滑动窗户，表示是查看攻略
/*var findAnagrams = function (s, p) {
    function isAnagrams(target, gogal) {
        var s1 = Array.prototype.sort.call(target.split("")).join("");
        return s1 === gogal;
    }

    var len = p.length,
        res = [];

    p = Array.prototype.sort.call(p.split("")).join("");
    for (var i = 0; i <= s.length - len; ++i) {
        if (p.indexOf(s[i]) == -1){
            continue
        }
        var sub = s.substr(i, len);
        if (isAnagrams(sub, p)) {
            res.push(i);
        }
    }

    return res;
};*/

// var findAnagrams = function(s, p) {
//     function getHashMap(str) {
//         var hashMap = {};
//         for (var i = 0; i < p.length; ++i){
//             var val = str[i];
//
//             if (!hashMap[val]){
//                 hashMap[val] = 0;
//             }
//             hashMap[val]++;
//         }
//
//         return hashMap;
//     }
//     function isEqualObj(obj1, obj2) {
//         for(var key in obj1){
//             if (obj1[key] !== obj2[key]){
//                 return false;
//             }
//         }
//
//         return true;
//     }
//     // 同样会超时
// };

var findAnagrams = function(s, p) {
    function getHash(str) {
        var hash = {},
            count = str.length;
        for (var val of str){
            if(!hash[val]){
                hash[val] = 0;
            }
            hash[val]++;
        }

        return hash;
    }
    var originHash = getHash(p);

    var left = 0, right = 0, count = p.length;
    var result = [];
    while (right < s.length){
        if (originHash[s[right++]]-- > 0){
            count--;
        }
        if (count === 0){
            result.push(left);
        }
        if(right-left == p.length && originHash[s[left++]]++ >=0 ){
            count++;
        }
    }

    return result;
};
var s = "cbaebabacd",
    p = "abc";

console.log(findAnagrams(s, p)); // [0, 6]