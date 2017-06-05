/**
 * Created by admin on 2017/6/5.
 */
// 给定一个数组，找出其子数组中最长的和谐数组的长度
// 所谓和谐数组指其元素最大值和最小值相差为1

// 思路：统计每个数字出现的次数，然后找到可以组成和谐数组的元素，将他们的数量相加即可
let findLHS = function(nums) {
    let map = {};
    for (let i = 0, len = nums.length; i < len; ++i){
        if (map[nums[i]]) {
            map[nums[i]]++;
        }else {
            map[nums[i]] = 1;
        }
    }

    let result = 0;
    for (let key in map){
        key -= 0;
        let harmony = map[key + 1];
        if (harmony){
            result = Math.max(result, harmony + map[key]);
        }
    }
    return result;

};
let test = [1,3,2,2,5,2,3,7];
// let test = [1,1,1,1];
// findLHS(test)
console.log(findLHS(test));