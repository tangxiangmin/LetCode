/**
 * Created by admin on 2017/6/5.
 */
// 江洋大盗如何在不惊动警察的情况下获取最大收益
// 相邻的房间在同一晚上被抢劫就会自动报警

// 思路：典型的动态规划问题，每次循环都保留最大的数并从后面的
var rob = function(nums) {
    let even = 0,
        odd = 0;

    nums.forEach((item, index)=>{
        if (index%2){
            odd = Math.max(odd + item, even);
        }else {
            even = Math.max(even + item, odd);
        }
    });

    return Math.max(odd, even);
};