// 给定两个已排序的数组，将他们合并成一个已排序的数组
// 思路：最初的题意理解有点问题，本意是num1的空间足够大，但是只有m个有效元素，JS天生的动态数组造成了一些干扰

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// var merge = function (nums1, m, nums2, n) {
//     for (var i = 0, j = 0; i < m && j < n;) {
//         if (nums1[i + 1] > nums2[j]) {
//             nums1.splice(i + 1, 0, nums2[j]);
//             j++;
//         }
//         i++;
//     }
//     while (j < n) {
//         nums1.push(nums2[j]);
//         j++;
//     }
// };

var merge = function (nums1, m, nums2, n) {
    var i = m - 1, 
        j = n - 1,
        pos = m + n - 1;

    // 将数组2的元素逐个移动到数组1中
    while (j >= 0){
        // i>=0 可以判断是否已经比较完毕
        // 通过移动 i 或者 j来选择对应位置上的元素
        nums1[pos--] = i>=0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
};

var arr1 = [1,3,5],
    arr2 = [4,6,8,9,10];

merge(arr1, arr1.length, arr2, arr2.length);

console.log(arr1);

