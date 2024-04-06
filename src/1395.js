/**
 * @param {number[]} rating
 * @return {number}
 */
// 先BF试一下
var numTeams = function (rating) {
    const n = rating.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (rating[i] < rating[j]) {
                for (let k = j + 1; k < n; ++k) {
                    if (rating[j] < rating[k]) {
                        ans++
                    }
                }
            } else {
                for (let k = j + 1; k < n; ++k) {
                    if (rating[j] > rating[k]) {
                        ans++
                    }
                }
            }

        }
    }
    return ans
};


// 上面的BF,本质上是要找到右边比当前数字更大或更小的值
// 对于每个元素，第一种情况：找到左边比他小的数字x，以及右边比他大的数字y，则组合就是x*y
//第二种情况：找到左边比他大的数字m，以及右边比他小的数字n,则组合就是m*n
// 最终答案为x*y+m*n
// 因此可以节省一层循环
var numTeams = function (rating) {
    const n = rating.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        let a = 0, b = 0, c = 0, d = 0
        // 左边
        for (let j = 0; j < i; ++j) {
            if (rating[j] < rating[i]) {
                a++
            } else {
                c++
            }
        }
        for (let j = i + 1; j < n; ++j) {
            if (rating[j] > rating[i]) {
                b++
            } else {
                d++
            }
        }
        ans += a * b + c * d
    }
    return ans
}

// 参考大佬的DP
// dp[i][0]表示以i结尾的长度为2的上升序列个数，dp[i][1]表示以i结尾的长度为3的上升序列个数， 
// 对每一个元素i，我们遍历i之前的所有元素，就可以求出当前的dp[i][0] 与dp[i][1]
var numTeams = function (rating) {
    const n = rating.length;

    function func(rating) {
        const dp = Array.from({ length: n }, () => [0, 0]);
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (rating[i] > rating[j]) {
                    dp[i][0]++;
                    dp[i][1] += dp[j][0];
                }
            }
        }
        let ans = 0;
        for (let i = 2; i < n; i++) {
            ans += dp[i][1];
        }
        return ans;
    }

    const a = func(rating);
    const reversedRating = rating.slice().reverse();
    const b = func(reversedRating);
    return a + b;
}



var rating = [2, 5, 3, 4, 1]
rating = [2, 1, 3]
rating = [1, 2, 3, 4]
var ans = numTeams(rating)
console.log(ans)