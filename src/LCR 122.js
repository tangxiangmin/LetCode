/**
 * @param {string} path
 * @return {string}
 */
var pathEncryption = function (path) {
    return path.replaceAll(".", " ")
};