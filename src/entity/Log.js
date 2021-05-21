// logs
const {Commit} = require('./commit')
const {REG_PATTERN} = require('../utils/reg')

class Log {
    #_loglistStr
    #_commitList = []


    get commitList() {
        return this.#_commitList;
    }

    set commitList(value) {
        this.#_commitList = value;
    }

    get loglistStr() {
        return this.#_loglistStr;
    }

    set loglistStr(value) {
        this.#_loglistStr = value;
    }

    /**
     *   @Description log解析
     *   @author wenchao
     *   @date: 2021/5/20
     */
    async parseLog() {
        let commitList = this.loglistStr.matchAll(new RegExp(REG_PATTERN.commit))
        this.commitList = []
        Array.from(commitList).forEach(val => {
            let commit = new Commit(val[0])
            this.commitList.push(commit)
        })
    }

    constructor(log) {
        this.loglistStr = log
        this.parseLog()
    }
}

module.exports = {Log};
