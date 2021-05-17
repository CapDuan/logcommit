const readline = require('readline')
const {spawn} = require('child_process')

const createCallback = (resolve, reject) => (err, data) => {
    if (err) reject(err)
    else resolve(data)
}

const cmd = (string, onProgress) => {
    const [cmd, ...args] = string.trim().split(' ')
    return new Promise((resolve, reject) => {
        const child = spawn(cmd, args)
        let data = ''

        child.stdout.on('data', buffer => {
            data += buffer.toString()
            if (onProgress) {
                onProgress(data.length)
            }
        })
        child.stdout.on('end', () => resolve(data))
        child.on('error', reject)
    })
}
const updateLog = (string, clearLine = true) => {
    if (clearLine) {
        readline.clearLine(process.stdout)
        readline.cursorTo(process.stdout, 0)
    }
    process.stdout.write(string)
}

module.exports = {
    updateLog,
    cmd,
    createCallback
}
