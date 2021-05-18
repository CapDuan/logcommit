const {updateLog, cmd} = require('./utils')
const {fileExists, formatBytes, writeFile} = require('./utils/fileUtils')


const run = async argv => {
    const options = {output: 'changelog'}
    const log = string => options.stdout ? null : updateLog(string)
    log('\n gitcommit start...\n')
    //测试
    let startTag
        // = 'v0.0.101'
        = null
    let endTag
        // = 'v0.0.1'
        = null
    const logs = (await cmd(`git log`))
    let gitLogsList = logs.split('\n')
    gitLogsList.forEach(val => {
        console.log(val)
        // if (val.startsWith('commit')) {            console.log(val)        }
    })
    // await write(loglines, options, log)
}
const getCommit = async (logs) => {

}

const write = async (changelog, options, log) => {
    await writeFile(options.output, changelog)
}
module.exports = {
    run
}
