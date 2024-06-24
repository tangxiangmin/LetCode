/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {

    return s.includes('@') ? email(s) : phone(s)

    function email(s) {
        const [name, host] = s.split('@')
        return name[0].toLowerCase() + '*****' + name[name.length - 1].toLowerCase() + '@' + host.toLowerCase()
    }

    function phone(s) {
        s = s.replace(/\+|\-|\(|\)|\s/igm, '')
        console.log(s)
        const code = s.slice(0, s.length - 10)
        const value = s.slice(s.length - 10)
        const prefix = code.length ? '+' + new Array(code.length).fill('*').join('') + '-' : ''

        const c = value.slice(6)
        return prefix + '***' + '-' + '***' + '-' + c
    }
};
var s = "1(234)567-890"
var ans = maskPII(s)
console.log(ans)