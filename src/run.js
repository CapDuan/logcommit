const {updateLog, cmd} = require('./utils')
const {fileExists, formatBytes, writeFile} = require('./utils/fileUtils')


const run = async argv => {
    const options = {output: 'changelog'}
    const log = string => options.stdout ? null : updateLog(string)
    log('\n gitcommit start...')
    //测试
    const logs = (await cmd(`git log`))
    await write(logs, options, log)
}
const write = async (changelog, options, log) => {
    await writeFile(options.output, changelog)
}
module.exports = {
    run
}