/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let ans = "";
    for (let i = 0; i < command.length; ) {
        let ch = command[i];
        if (ch === "G") {
            ans += "G";
            i++;
        } else if (ch === "(") {
            if (command[i + 1] === ")") {
                ans += "o";
                i += 2;
            } else {
                ans += "al";
                i += 4;
            }
        }
    }
    return ans
};
