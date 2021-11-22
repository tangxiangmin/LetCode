/**
 * @param {number[]} nums
 */
 var Solution = function (nums) {
    this.nums = nums;
    this.last = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.nums = this.last.slice();
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    var input = this.nums
    for (let i = input.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }

    return input
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
