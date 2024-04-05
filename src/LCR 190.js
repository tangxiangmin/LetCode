/**
 * @param {number} dataA
 * @param {number} dataB
 * @return {number}
 */
var encryptionCalculate = function (dataA, dataB) {
    while (dataB != 0) {
        var c = (dataA & dataB) << 1;
        dataA ^= dataB;
        dataB = c;
    }
    return dataA;

};