// 给定一个树，判断其二进制是否是1与0交替组成的

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let str = n.toString(2);

  for (var i = 0; i < str.length - 1; ++i) {
    let cur = str[i],
      next = str[i + 1];

    if (cur == next) {
      return false;
    }
  }
  return true;
};

hasAlternatingBits(10);
