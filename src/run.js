const {updateLog, cmd} = require('./utils')
const {fileExists, formatBytes, writeFile} = require('./utils/fileUtils')
const {LogBuilder} = require('./entity/LogBuilder')
const {Parser} = require('./entity/parser')
const run = async argv => {
    const options = {output: 'changelog'}
    const log = string => options.stdout ? null : updateLog(string)
    log('\n gitcommit start...\n')
    let temp = new LogBuilder()
    let logs = await temp.getLog()
    let parser = new Parser(logs.commitList)

}
const write = async (changelog, options, log) => {
    await writeFile(options.output, changelog)
}
module.exports = {
    run
}
