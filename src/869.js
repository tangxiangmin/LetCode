const countDigits = (n) => {
    const cnt = new Array(10).fill(0);
    while (n) {
        cnt[n % 10]++;
        n = Math.floor(n / 10);
    }
    return cnt.join('');
}



var reorderedPowerOf2 = function(n) {
    const powerOf2Digits = new Set();

    for (let n = 1; n <= 1e9; n <<= 1) {
        powerOf2Digits.add(countDigits(n));
    }

    return powerOf2Digits.has(countDigits(n));
};
