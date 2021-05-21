const {updateLog, cmd} = require('./utils')
const {Command} = require('commander')

const {fileExists, formatBytes, writeFile} = require('./utils/fileUtils')
const {LogBuilder} = require('./entity/LogBuilder')
const {Parser} = require('./entity/parser')
const run = async argv => {

    const commandOptions = new Command()
        .option('-at, --author <author>').parse(argv)
        .option('-sd, --startDate <startDate>').parse(argv)
        .option('-ed, --endDate <endDate>').parse(argv)

    const options = {
        output: 'changelog',
        ...commandOptions
    }
    const log = string => options.stdout ? null : updateLog(string)
    log('\n gitcommit start...\n')
    let temp = new LogBuilder({author: options.author, start: options.startDate, end: options.endDate})
    let logs = await temp.getLog()
    let parser = new Parser(logs.commitList)
}
const write = async (changelog, options, log) => {
    await writeFile(options.output, changelog)
}
module.exports = {
    run
}
