const {updateLog} = require('./utils')

const run = async argv => {
    const options = {}
    const log = string => options.stdout ? null : updateLog(string)
    log('\n gitcommit start...')
}
module.exports = {
    run
}
