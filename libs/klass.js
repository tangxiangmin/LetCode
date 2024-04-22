

function runClass(Ctor, action, params) {
    const instnace = new Ctor(...params[0])
    const n = action.length
    for (let i = 1; i < n; ++i) {
        const res = instnace[action[i]].apply(instnace, params[i])
        console.log(res)
    }
}

module.exports = {
    runClass
}