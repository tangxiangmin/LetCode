/**
 * @param {number[]} fruits
 * @return {number}
 */
// 看起来是求只包含两种类型的最长子数组长度
// 先模拟一下，将相同元素合并之后，选择符合条件的连续子数组
var totalFruit = function (fruits) {
    const arr = []
    let cur = fruits[0]
    let cnt = 1
    for (let i = 1; i < fruits.length; ++i) {
        if (fruits[i] === cur) {
            cnt++
        } else {
            arr.push([cur, cnt])
            cur = fruits[i]
            cnt = 1
        }
    }
    arr.push([cur, cnt])

    let ans = 0
    let [a, sa] = arr[0]
    if (arr.length < 2) {
        return sa
    }
    let [b, sb] = arr[1]

    // console.log(JSON.stringify(arr))
    for (let i = 2; i < arr.length; ++i) {
        const [cur, cnt] = arr[i]
        if (cur === a) {
            sa += cnt
        } else if (cur === b) {
            sb += cnt
        } else {
            ans = Math.max(ans, sa + sb)
            let prev = arr[i - 1]
            if (prev[0] === b) {
                a = cur
                sa = cnt
                sb = prev[1]
            } else {
                b = cur
                sb = cnt
                sa = prev[1]
            }
        }
    }
    ans = Math.max(ans, sa + sb)
    return ans
};
// 上面这个代码看起来有点恶心，应该是可以优化的
// 一个滑动窗口，窗口内只能有两种元素
var totalFruit = function (fruits) {
    const n = fruits.length
    if (n <= 2) return n

    let ans = 0

    let i = 0
    let left = 0

    const set = new Set()
    while (set.size < 2 && i < n) {
        set.add(fruits[i])
        i++
    }
    while (set.has(fruits[i])) {
        i++
    }

    ans = i - left

    while (i < n) {
        const v = fruits[i]
        const prev = fruits[i - 1]
        left = i - 2
        while (prev === fruits[left] && left >= 0) {
            left--
        }
        left++
        set.clear()
        set.add(prev)
        set.add(v)
        // 将当前元素最长的添加进来
        while (set.has(fruits[i]) && i < n) {
            i++
        }
        ans = Math.max(ans, i - left)
    }
    return ans
}
var fruits = [0, 1, 2, 2, 1, 0, 0]
fruits = [1, 2, 1]
// fruits = [0, 1, 2, 2]
// fruits = [1, 2, 3, 2, 2]
// fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
fruits = [1, 0, 1, 4, 1, 4, 1, 2, 3]
var ans = totalFruit(fruits)
console.log(ans)