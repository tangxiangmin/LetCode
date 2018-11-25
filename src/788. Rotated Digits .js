// 旋转数字，判断旋转后的结果是否是合法的，输出指定区间合法的数字

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    function isGoodNumber(num) {
        let flag = false
        for(let j = 0; j < num.length; ++j){
            let i = num[j]
            if (i == '2' || i == '5' || i == '6' || i == '9') {
                flag = true;
            } else if (i == '3' || i == '4' || i == '7') {
                return false;
            }
        }

        
        return flag

        // num = num.toString();
        // let res = "";
        // for (let i = 0; i < num.length; ++i) {
        //     let item = getRotateNumber(num[i]);
        //     if (item === false) {
        //         return false;
        //     } else {
        //         res += item;
        //     }
        // }
        // return res != num;
    }

    let ans = 0;
    for (let i = 1; i <= N; ++i) {
        if (isGoodNumber(i.toString())) {
            ans++
        }
    }
    return ans;
};

rotatedDigits(10)