const fs = require('fs')
const {createCallback} = require('../utils')

const fileExists = (path) => {
    return new Promise(resolve => {
        fs.access(path, err => resolve(!err))
    })
}
const formatBytes = (bytes) => {
    return `${Math.max(1, Math.round(bytes / 1024))} kB`
}
const writeFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, createCallback(resolve, reject))
    })
}
module.exports = {
    fileExists,
    formatBytes,
    writeFile
}
