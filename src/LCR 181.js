/**
 * @param {string} message
 * @return {string}
 */
var reverseMessage = function(message) {
    const words= message.trim().replace(/\s+/igm, ' ').split(" ")
    return words.reverse().join(' ')
};