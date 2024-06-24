// 线段树

// var NumArray = function (nums) {
//     n = nums.length;
//     this.segmentTree = new Array(nums.length * 4).fill(0);
//     this.build(0, 0, n - 1, nums);
// };

// NumArray.prototype.update = function (index, val) {
//     this.change(index, val, 0, 0, n - 1);
// };

// NumArray.prototype.sumRange = function (left, right) {
//     return this.range(left, right, 0, 0, n - 1);
// };

// NumArray.prototype.build = function (node, s, e, nums) {
//     if (s === e) {
//         this.segmentTree[node] = nums[s];
//         return;
//     }
//     const m = s + Math.floor((e - s) / 2);
//     this.build(node * 2 + 1, s, m, nums);
//     this.build(node * 2 + 2, m + 1, e, nums);
//     this.segmentTree[node] =
//         this.segmentTree[node * 2 + 1] + this.segmentTree[node * 2 + 2];
// };

// NumArray.prototype.change = function (index, val, node, s, e) {
//     if (s === e) {
//         this.segmentTree[node] = val;
//         return;
//     }
//     const m = s + Math.floor((e - s) / 2);
//     if (index <= m) {
//         this.change(index, val, node * 2 + 1, s, m);
//     } else {
//         this.change(index, val, node * 2 + 2, m + 1, e);
//     }
//     this.segmentTree[node] =
//         this.segmentTree[node * 2 + 1] + this.segmentTree[node * 2 + 2];
// };

// NumArray.prototype.range = function (left, right, node, s, e) {
//     if (left === s && right === e) {
//         return this.segmentTree[node];
//     }
//     const m = s + Math.floor((e - s) / 2);
//     if (right <= m) {
//         return this.range(left, right, node * 2 + 1, s, m);
//     } else if (left > m) {
//         return this.range(left, right, node * 2 + 2, m + 1, e);
//     } else {
//         return (
//             this.range(left, m, node * 2 + 1, s, m) +
//             this.range(m + 1, right, node * 2 + 2, m + 1, e)
//         );
//     }
// };


function lowbit(x) {
    return x & (-x)
}
// 树状数组
var NumArray = function (nums) {
    const n = nums.length
    this.nums = new Array(n).fill(0)
    this.tree = new Array(n + 1).fill(0)
    for (let i = 0; i < n; ++i) {
        this.update(i, nums[i])
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    const diff = val - this.nums[index]
    this.nums[index] = val
    for (let i = index + 1; i < this.tree.length; i += lowbit(i)) {
        this.tree[i] += diff
    }
};

NumArray.prototype.prefixSum = function (index) {
    let sum = 0
    for (let i = index; i > 0; i -= lowbit(i)) {
        sum += this.tree[i]
    }
    return sum
};
/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */

NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSum(right + 1) - this.prefixSum(left)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */