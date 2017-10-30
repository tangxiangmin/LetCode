// 给定一个整数数组和k，判断是否存在两个元素值相等，且其索引绝对差最大不超过k

var containsNearbyDuplicate = function(nums, k) {
    if (nums.length < 2){
        return false
    }
    var map = {};
    for (var i = 0; i < nums.length; ++i){
        if (i > k){
            map[nums[i-k-1]] = undefined;
        }
        console.log(map);
        if (typeof map[nums[i]] != 'undefined'){
            return true
        }else {
            map[nums[i]] = 1;
        }
    }
    return false
};

var arr = [1,2],
    k = 2;
console.log(containsNearbyDuplicate(arr, k));