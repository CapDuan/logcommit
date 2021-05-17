const readline = require('readline')

const updateLog = (string, clearLine = true) => {
    if (clearLine) {
        readline.clearLine(process.stdout)
        readline.cursorTo(process.stdout, 0)
    }
    process.stdout.write(`auto-changelog: ${string}`)
}

module.exports = {
    updateLog,
}
