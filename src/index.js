#!/usr/bin/env node

const {run} = require('./run')

run(process.argv).catch(async error => {
    console.log('\n')
    console.error(error)
    process.exit(1)
})
