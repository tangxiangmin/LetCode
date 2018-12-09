/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {

    let x = a.split(/\+|i/);
    let y = b.split(/\+|i/);
    let a_real = parseInt(x[0]);
    let a_img = parseInt(x[1]);
    let b_real = parseInt(y[0]);
    let b_img = parseInt(y[1]);

    return (a_real * b_real - a_img * b_img) + "+" + (a_real * b_img + a_img * b_real) + "i";
};

complexNumberMultiply("1+-1i","1+-1i")