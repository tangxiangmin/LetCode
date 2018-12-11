/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let popIndex = 0
    let pushStack = []
    for(let i = 0; i < pushed.length; ++i){
        let pop = popped[popIndex];
        pushStack.push(pushed[i]);
        if (pushed[i] === pop) {
            while (pushStack[pushStack.length - 1] === popped[popIndex] && popIndex < popped.length) {
                popIndex++;
                pushStack.pop();
            }
        }
    }
    return pushStack.length === 0
};
let pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1]

validateStackSequences(pushed, popped)