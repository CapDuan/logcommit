const {updateLog, cmd} = require('./utils')
const {Command} = require('commander')

const {fileExists, formatBytes, writeFile} = require('./utils/fileUtils')
const {LogBuilder} = require('./entity/LogBuilder')
const {Parser} = require('./entity/parser')
const run = async argv => {

    const commandOptions = new Command()
        .option('-at, --author <author>')
        .option('-sd, --startDate <startDate>')
        .option('-ed, --endDate <endDate>')
        .option('-dt, --detail <detail>').parse(argv)
    const options = {
        output: 'changelog',
        ...commandOptions._optionValues
    }
    const log = string => options.stdout ? null : updateLog(string)
    log('\n gitcommit start...\n')
    console.log(options)
    let temp = new LogBuilder(options)
    let logs = await temp.getLog()
    let parser = new Parser(logs.commitList, options)
}
const write = async (changelog, options, log) => {
    await writeFile(options.output, changelog)
}
module.exports = {
    run
}
