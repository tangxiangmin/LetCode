/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
    let change = false
    if (palindrome.length === 1) return ''
    palindrome = palindrome.split('')
    const n = palindrome.length
    const target = Math.floor(n / 2)
    for (let i = 0; i < target; ++i) {
        const ch = palindrome[i]
        if (ch !== 'a' && !change) {
            palindrome[i] = 'a'
            change = true
            break
        }
    }
    if (!change) {
        palindrome[n - 1] = 'b'
    }
    return palindrome.join('')
};

var palindrome = "aba"
palindrome = "abccba"
var ans = breakPalindrome(palindrome)
console.log(ans)