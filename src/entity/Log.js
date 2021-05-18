// logs

class Log {
    #_loglistStr
    get loglistStr() {
        return this.#_loglistStr;
    }

    set loglistStr(value) {
        this.#_loglistStr = value;
    }

    constructor(log) {
        this.loglistStr = log
    }
}

module.exports = {Log}