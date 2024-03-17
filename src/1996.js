/**
 * @param {number[][]} properties
 * @return {number}
 */
// BF，显然会超时
var numberOfWeakCharacters = function (properties) {
    let ans = 0
    for (let i = 0; i < properties.length; ++i) {
        if (isWeak(i)) {
            ans++
        }
    }
    return ans
    function isWeak(index) {
        const target = properties[index]
        for (let i = 0; i < properties.length; ++i) {
            if (index === i) continue
            const [a, d] = properties[i]
            if (a > target[0] && d > target[1]) {
                return true
            }
        }
        return false
    }
};
// 思路2，排序，按照攻击值从大到小开始遍历，如果攻击力相同，则按照防御值从小到大进行排序，这样从头开始遍历的时候，只需要使用一个变量记录最大的防御力max，如果当前元素防御力比max小，则说明是一个弱元素（因为排在后面的元素本身攻击力也比前面的小）
var numberOfWeakCharacters = function (properties) {
    properties.sort((o1, o2) => {
        return o1[0] === o2[0] ? (o1[1] - o2[1]) : (o2[0] - o1[0]);
    });
    let maxDef = 0;
    let ans = 0;
    for (const p of properties) {
        if (p[1] < maxDef) {
            ans++;
        } else {
            maxDef = p[1];
        }
    }
    return ans;
};

// 思路3： 单调栈，按攻击力从小到大排，攻击力相同则按照防御力从大到小排， 这样即可保证攻击值相同但防御值不同时的角色在进行比较时不会产生计数。
// 从头遍历，构建一个防御力的递减栈
var numberOfWeakCharacters = function (properties) {
    properties.sort((o1, o2) => {
        return o1[0] === o2[0] ? (o2[1] - o1[1]) : (o1[0] - o2[0])
    });
    const stack = [] // 栈顶使用保存遍历的最大的防御力
    let ans = 0
    for (const p of properties) {
        while (stack.length && stack[stack.length - 1] < p[1]) {
            stack.pop()
            ans++
        }
        stack.push(p[1])
    }

    return ans;
};

var properties = [[5, 5], [6, 3], [3, 6]]
// properties = [[2, 2], [3, 3]]
// properties = [[1, 5], [10, 4], [4, 3]]
// properties = [[1, 1], [2, 1], [2, 2], [1, 2]]
properties = [[7, 9], [10, 7], [6, 9], [10, 4], [7, 5], [7, 10]]
var ans = numberOfWeakCharacters(properties)
console.log(ans)