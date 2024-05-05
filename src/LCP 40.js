/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
// 最大的cnt个数
var maxmiumScore = function (cards, cnt) {
    // 对数组进行降序排序
    cards.sort((a, b) => b - a);

    // 计算选择前 cnt 个元素的总和
    let sum = 0;
    for (let i = 0; i < cnt; i++) {
        sum += cards[i];
    }

    // 如果总和为偶数，则返回总和
    if (sum % 2 === 0) {
        return sum;
    }

    // 替换函数：找到cards[cnt:]中一个与x奇偶性不同的最大元素，并尝试替换
    function replace(x) {
        for (let i = cnt; i < cards.length; i++) {
            if (cards[i] % 2 !== x % 2) {
                ans = Math.max(ans, sum - x + cards[i]);
                break;
            }
        }
    }

    // 初始化答案变量
    let ans = 0;

    // 尝试用cards[cnt:]的最大值替换cards[cnt-1]
    replace(cards[cnt - 1]);

    // 从cnt-2开始，找一个奇偶性不同于cards[cnt-1]的最小值，并尝试替换
    for (let i = cnt - 2; i >= 0; i--) {
        if (cards[i] % 2 !== cards[cnt - 1] % 2) {
            replace(cards[i]);
            break;
        }
    }

    return ans;
};
var cards = [1, 2, 8, 9], cnt = 3
cards = [3, 3, 1], cnt = 1
cards = [9, 5, 9, 1, 6, 10, 3, 4, 5, 1], cnt = 2
var ans = maxmiumScore(cards, cnt)
console.log(ans)