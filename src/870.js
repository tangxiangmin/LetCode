/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// 看见这道题想起了田忌赛马，
// 要使A[i]>B[i]的索引值数目最大，牺牲A中的较小值与B中的较大值比较，
// 由于我们无法改变B的顺序，因此在遍历时从剩余元素中去一个最小的比B[i]大的元素

// 但是这个算法并不能通过所有测试用例
var advantageCount = function (A, B) {
    A.sort((a, b) => a - b)
    var ans = []
    var left = []

    var j = 0
    var len = B.length
    for (var i = 0; i < len; ++i) {
        var b = B[i]
        var hasFindMin = false
        for (var k = 0; k < left.length; ++k) {
            if (left[k] > b) {
                ans.push(left[k])
                left.splice(k, 1)
                hasFindMin = true
                break
            }
        }
        if (hasFindMin) continue
        if (j < len) {
            // 如果当前元素比b小，则放入left中，否则可以直接作为对于b的元素
            while (j < len && A[j] <= b) {
                left.push(A[j])
                j++
            }
            if (j < len) {
                ans.push(A[j])
                j++
            }
        } else {
            ans.push(left.shift())
        }
    }

    var res = ans.concat(left)
    return res
};



var A = [2, 7, 11, 15], B = [1, 10, 4, 11]
// 具体过程,尽可能找到一个比B当前值大的最小元素
// 首先将A排序[2,7,11,15]
// 2->1,剩余[]
// 2->1 11->10, 剩余较小的数7未被比较
// 从剩余较小数中找到是否有满足大于4的,找到7->4，剩余[]
// 15->11

// 根据贪心的
var advantageCount = function (A, B) {
    A.sort((a, b) => a - b)
    var tmpB = B.slice() // 最后返回的结果顺序依赖B的原始顺序
    B.sort((a, b) => a - b)
    var len = A.length

    var map = {}
    var remain = []
    var j = 0
    for (var i = 0; i < len; ++i) {
        var a = A[i]
        var b = B[j]
        if (a > b) {
            if (!map[b]) map[b] = []
            // 保存a->b的对应关系
            map[b].push(a)
            j++
        } else {
            remain.push(a)
        }
    }
    // 按照原始B的顺序属性映射，如果不存在，则从remain中挑出一个占位即可
    var ans = []
    for (var i = 0; i < len; ++i) {
        var b = tmpB[i]
        if (map[b] && map[b].length) {
            var a = map[b].shift()
            ans.push(a)
        } else {
            ans.push(remain.pop())
        }
    }

    return ans
}


A = [0], B = [0]
A = [2, 0, 4, 1, 2], B = [1, 3, 0, 0, 2]
A = [12, 24, 8, 32], B = [13, 25, 32, 11]
A = [5621, 1743, 5532, 3549, 9581], B = [913, 9787, 4121, 5039, 1481]
// [1743,5532,5621,3549,9581] // 3
// [1743,9581,5532,5621,3549] // 4
var res = advantageCount(A, B)
console.log(res)