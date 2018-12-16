/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    function isPalindromic(s){
        let head = 0,
            tail = s.length - 1
        while(head <= tail){
            if(s[head] !== s[tail]){
                return false
            }
        }
        return true
    }

    let N = S.length(), ans = 0;
    for (let center = 0; center <= 2 * N - 1; ++center) {
        let left = center / 2;
        let right = left + center % 2;
        while (left >= 0 && right < N && S.charAt(left) == S.charAt(right)) {
            ans++;
            left--;
            right++;
        }
    }
    return ans;
};