/**
 * @param {number[]} nums
 * @return {number[][]}
 * 参考： https://blog.csdn.net/lemon_tree12138/article/details/50986990
 */
var permute = function(nums) {
    let ans = [];
    function swap(arr, i, j){
        let tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
    }

    function perm(arr, start, end) {
        if (start === end) {
            ans.push(arr.slice());
        } else {
            for (let i = start; i <= end; i++) {
                swap(arr, start, i)
                perm(arr, start + 1, end);
                swap(arr, start, i);
            }
        }
    }
    perm(nums, 0, nums.length - 1);
    return ans
};

let input = [1, 2, 3];
let res = permute(input);
console.log(res);
