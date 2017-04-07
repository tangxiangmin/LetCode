/**
 * Created by admin on 2017/4/7.
 */
var moveZeroes = function(nums) {
    var flagZero = -1,
        flagNoZero = -1;
    for (var i = 0, len = nums.length; i < len; ++i){
        // 找到第一个为0的值
        if (nums[i] !==0 && flagNoZero === -1) {
            console.log("isn't 0: " + i);

            flagNoZero = i;
        }
        if (nums[i] === 0 && flagZero === -1){
            console.log("is 0: " + i);
            flagZero = i;
        }

        // 将第一个非0值与第一个0值交换
        if (flagNoZero !== -1 && flagZero !== -1){
            console.log(flagNoZero,flagZero)
            var tmp = nums[flagNoZero];
            nums[flagNoZero] = nums[flagZero];
            nums[flagZero] = tmp;
            flagZero = flagNoZero = -1;
        }
    }

    return nums;
};


var test = [0, 1, 0, 3, 12];
console.log(moveZeroes(test));