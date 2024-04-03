/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// 看起来可以从中间位置开始模拟
var asteroidCollision = function (asteroids) {
    const n = asteroids.length
    let stack = [asteroids[0]]
    for (let i = 1; i < n; ++i) {
        const cur = asteroids[i]
        if (!stack.length) {
            stack.push(cur)
            continue
        }

        while (stack.length) {
            const top = stack[stack.length - 1]
            if (cur < 0 && top > 0) {
                if (-cur < top) {
                    // 毁灭
                    break
                } else if (-cur === top) {
                    stack.pop()
                    break
                } else {
                    stack.pop()
                    if (!stack.length) {
                        stack.push(cur)
                        break
                    }
                }
            } else {
                stack.push(cur)
                break
            }
        }
    }
    return stack
};

var asteroids = [5, 10, -5]
// asteroids = [8, -8]
asteroids = [10, 2, -5, -11, 10]
asteroids = [1, -1, -2, -2]
var ans = asteroidCollision(asteroids)
console.log(ans)