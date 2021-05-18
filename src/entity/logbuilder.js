// logbullder
const {cmd} = require('../utils')
const {Tag} = require('./Tag')
const {Log} = require('./Log')

class logbuilder {
    get logCmd() {
        return this.#_logCmd;
    }

    set logCmd(value) {
        this.#_logCmd = value;
    }

    get tagCmd() {
        return this.#_tagCmd;
    }

    set tagCmd(value) {
        this.#_tagCmd = value;
    }

    get startDate() {
        return this.#_startDate;
    }

    set startDate(value) {
        this.#_startDate = value;
    }

    get endDate() {
        return this.#_endDate;
    }

    set endDate(value) {
        this.#_endDate = value;
    }

    get author() {
        return this.#_author;
    }

    set author(value) {
        this.#_author = value;
    }

    // 私有域
    /**
     *   @Description
     *   @author wenchao
     *   @date: 2021/5/18
     */
    #_author = ''
    #_startDate = null
    #_endDate = null
    #_logCmd = 'git log '
    #_tagCmd = 'git tag '

    /**
     *   @Description 获取tag
     *   @author wenchao
     *   @date: 2021/5/18
     */
    async getTag() {
        return new Tag(await cmd(this.tagCmd))
    }

    /**
     *   @Description 获取日志
     *   @author wenchao
     *   @date: 2021/5/18
     */
    async getLog() {
        return new Log(await cmd(this.logCmd))
    }

    /**
     *   @Description
     *   @author wenchao
     *   @date: 2021/5/18
     */
    buildOptions() {
        let logfilter = '';
        `--author=${this.author}`
        if (this.author) {
            logfilter += `--author=${this.author}`
        }
        if (this.startDate && this.endDate) {
            logfilter += `--after=${this.startDate} ` + `--before=${this.endDate}`
        } else if (this.endDate && !this.startDate) {
            logfilter += `--before=${this.endDate}`
        } else if (this.startDate && !this.endDate) {
            logfilter += `--after=${this.startDate}`
        } else {
            logfilter += ''
        }
        this.logCmd += logfilter
    }

    // 公共域
    // 构造方法
    constructor({author, start, end}) {
        this.author = author
        this.startDate = start
        this.endDate = end
        this.buildOptions()
    }
}

// test
// let temp = new logbuilder({author: '段文超', start: '2021-05-01', end: '2021-05-15'})
// let temp = new logbuilder({author: '段文超'})
// let tag = temp.getTag().then(value => {
//     console.log(value.taglistStr)
// })
// let log = temp.getLog().then(value => {
//     console.log(value.loglistStr)
// })
//