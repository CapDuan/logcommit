// logs

class Log {
    #_loglistStr
    #_commitReg = new RegExp(/commit [a-f0-9]{40}\n/g)

    // #_authorReg = new RegExp(/^commit ([a-fA-F0-9]{32})/)

    get loglistStr() {
        return this.#_loglistStr;
    }

    set loglistStr(value) {
        this.#_loglistStr = value;
    }

    list = []

    constructor(log) {
        this.loglistStr = log
        this.list = this.loglistStr.split(/commit ([a-fA-F0-9]{32})\n/)
    }
}

module.exports = {Log}