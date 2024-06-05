/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
    const map = {
        '&quot;': '"',
        '&apos;': '\'',
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/'

    }
    return text.replace(/(&quot;|&apos;|&amp;|&gt;|&lt;|&frasl;)/igm, function (match, $1) {
        return map[$1]
    })
};