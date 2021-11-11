/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    var tokens = sentence.split(/\s+/);

    return tokens.filter((token) => {
        token = token.trim();
        if (!token) return false;

        var len = token.length;
        var hasDash = false;
        for (var i = 0; i < len; ++i) {
            var ch = token[i];
            // 不能有数字
            if (/\d/.test(ch)) {
                return false;
            }
            if (ch === "-") {
                // 超过一个
                if (hasDash) return false;
                // 不能在开头或者结尾
                if (i === 0 || i === len - 1) return false;

                // 前后必须是小写
                var prev = token[i - 1];
                var next = token[i + 1];
                if (!/[a-z]/.test(prev) || !/[a-z]/.test(next)) return false;
                hasDash = true;
            } else if (["!", ".", ","].includes(ch)) {
                // 标点符号只能在末尾
                if (i !== len - 1) return false;
            }
        }
        return true;
    }).length;
};

var sentence = "cat and  dog";
sentence = "!this  1-s b8d!";
sentence = "alice and  bob are playing stone-game10";
sentence = "!g 3 !sy ";
sentence =
    " 62   nvtk0wr4f  8 qt3r! w1ph 1l ,e0d 0n 2v 7c.  n06huu2n9 s9   ui4 nsr!d7olr  q-, vqdo!btpmtmui.bb83lf g .!v9-lg 2fyoykex uy5a 8v whvu8 .y sc5 -0n4 zo pfgju 5u 4 3x,3!wl  fv4   s  aig cf j1 a i  8m5o1  !u n!.1tz87d3 .9    n a3  .xb1p9f  b1i a j8s2 cugf l494cx1! hisceovf3 8d93 sg 4r.f1z9w   4- cb r97jo hln3s h2 o .  8dx08as7l!mcmc isa49afk i1 fk,s e !1 ln rt2vhu 4ks4zq c w  o- 6  5!.n8ten0 6mk 2k2y3e335,yj  h p3 5 -0  5g1c  tr49, ,qp9 -v p  7p4v110926wwr h x wklq u zo 16. !8  u63n0c l3 yckifu 1cgz t.i   lh w xa l,jt   hpi ng-gvtk8 9 j u9qfcd!2  kyu42v dmv.cst6i5fo rxhw4wvp2 1 okc8!  z aribcam0  cp-zp,!e x  agj-gb3 !om3934 k vnuo056h g7 t-6j! 8w8fncebuj-lq    inzqhw v39,  f e 9. 50 , ru3r  mbuab  6  wz dw79.av2xp . gbmy gc s6pi pra4fo9fwq k   j-ppy -3vpf   o k4hy3 -!..5s ,2 k5 j p38dtd   !i   b!fgj,nx qgif ";
var ans = countValidWords(sentence);
console.log(ans);
