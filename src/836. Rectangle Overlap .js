// 判断两个矩形是否重叠
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    return !(rec1[2] <= rec2[0] || // 右上角的横坐标比另一个左下角的横坐标还靠左，则说明全在左边，下面同理
        rec1[3] <= rec2[1] ||
        rec1[0] >= rec2[2] ||
        rec1[1] >= rec2[3]);
};