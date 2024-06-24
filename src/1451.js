/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    const arr = text.split(' ')
    arr[0] = arr[0].toLowerCase()

    arr.sort((a, b) => a.length - b.length)
    arr[0] = arr[0][0].toUpperCase() + arr[0].substring(1)
    return arr.join(' ')
};