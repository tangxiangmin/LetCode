/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // 组合
    var combo = function (arr, num) {
        var result = [];
        var range = function (r, _arr) {
            if (r.length == num) {
                result.push(r)
            } else {
                let l = r.length;
                for (var i = 0, len = _arr.length - num + l; i <= len; i++) {
                    range(r.concat(_arr[i]), _arr.slice(i + 1))
                }
            }
        }
        range([], arr);
        return result
    }
    
    let res = []
    for (let i = 0; i <= nums.length; ++i){
        res = res.concat(combo(nums, i))
    }
    return res
};

subsets([1, 2, 3])