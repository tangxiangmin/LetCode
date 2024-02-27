/**
 * @param {number[]} materials
 * @param {number[][]} cookbooks
 * @param {number[][]} attribute
 * @param {number} limit
 * @return {number}
 */
// 思路：使用materials和cookbooks组合能制作的菜品数量，然后根据attribute取符合limit的最大值
var perfectMenu = function (materials, cookbooks, attribute, limit) {
    var ans = -1
    function dfs(start, x, y) {
        if (y >= limit) {
            ans = Math.max(x, ans)
        }

        for (var i = start; i < cookbooks.length; ++i) {
            const attr = attribute[i]

            if (canDoDeal(i)) {
                doDeal(i)
                x += attr[0]
                y += attr[1]
            } else {
                continue
            }
            dfs(i + 1, x, y)
            cancelDeal(i)
            x -= attr[0]
            y -= attr[1]
        }
    }
    for (var i = 0; i < cookbooks.length; i++) {
        dfs(i, 0, 0)
    }

    return ans

    function canDoDeal(i) {
        var cookbook = cookbooks[i]
        return cookbook.every((val, index) => materials[index] >= val)
    }

    function doDeal(i) {
        var cookbook = cookbooks[i]
        for (var j = 0; j < cookbook.length; ++j) {
            materials[j] -= cookbook[j]
        }

    }
    function cancelDeal(i) {
        var cookbook = cookbooks[i]
        for (var j = 0; j < cookbook.length; ++j) {
            materials[j] += cookbook[j]
        }

    }
};

var materials = [3, 2, 4, 1, 2], cookbooks = [[1, 1, 0, 1, 2], [2, 1, 4, 0, 0], [3, 2, 4, 1, 0]], attribute = [[3, 2], [2, 4], [7, 6]], limit = 5

var ans = perfectMenu(materials, cookbooks, attribute, limit)

console.log(ans)