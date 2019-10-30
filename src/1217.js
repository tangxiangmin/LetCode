/**
 * @param {number[]} chips
 * @return {number}
 */
// 思路：首先找到每个位置上的筹码数量，由于移动两个位置代价为0，我们可以将所有筹码都0代价放在两个相邻的位置，然后从筹码数量少的位置向数量多的那个位置移动
var minCostToMoveChips = function (chips) {
    var odd = 0
    var even = 0
    chips.forEach(chip => {
        chip % 2 ? odd++ : even++
    })
    return Math.min(odd, even)
};
var chips = [2,2,2,3,3]
var res = minCostToMoveChips(chips)
